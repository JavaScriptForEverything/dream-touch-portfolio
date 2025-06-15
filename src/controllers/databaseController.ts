import type { ResponseData } from '@/types/common'
import { connection } from 'mongoose'
import { RequestHandler } from 'express'
import { appError, catchAsync } from '@/controllers/errorController'
import AdmZip from 'adm-zip'


// POST 	/api/database/clean
export const cleanDB: RequestHandler = catchAsync( async (req, res, next) => {

	const db = connection.db
	if(!db) return next(appError('DB not Found', 404, 'DB_Error')) 

	await db?.dropDatabase() 

	const responseData: ResponseData = {
		status: 'success',
		message: 'db clean'
	}
	res.status(200).json( responseData )
})


// POST 	/api/database/backup
export const backupDB = catchAsync(async (req, res, next) => {

 	let backupData = {} as any

 	try {
		const db = connection.db
		if(!db) return next(appError('DB not Found', 404, 'DB_Error')) 

    // Get all collection names
    const collections = await db.listCollections().toArray();

		for (const collectionInfo of collections) { 
			const collectionName = collectionInfo.name

			if (collectionName.startsWith('system.')) continue 
			
			const collection = db.collection( collectionName ) 	
			const docs = await collection.find({}).toArray() 					// => await Model.find({}).lean()

			if (!docs.length) continue 	
      backupData[collectionName] = docs
		}


    // Create zip file in memory
    const zip = new AdmZip()
    zip.addFile('backup.json', Buffer.from(JSON.stringify(backupData, null, 2)))
    
    // Set headers and send zip
    res.setHeader('Content-Type', 'application/zip')
    res.setHeader('Content-Disposition', 'attachment; filename=database_backup.zip')
    
    // Send the zip file directly from memory
    res.send(zip.toBuffer())

		backupData = {}


  } catch (error: any) {
		backupData = {}

    console.error('Backup error:', error);
		next(appError(`backup error: ${error.message}`))
  }

})


// POST 	/api/database/restore
export const restoreDB = catchAsync(async (req, res, next) => {
	const dataUrl = req.body.dataUrl 
	if(!dataUrl) return next(appError('kindly pass file as dataUrl in "file" property'))

	if( !dataUrl?.startsWith('data') ) throw new Error(`'${dataUrl}' is not valid dataUrl`) 
	const base64 = dataUrl.replace(/^data:.+;base64,/, '')

	const buffer = Buffer.from(base64, 'base64') 			

	const zip = new AdmZip(buffer);
	const zipEntries = zip.getEntries()
	const backupEntry = zipEntries.find(entry => entry.entryName === 'backup.json')
	if(!backupEntry) return next(appError('Invalid backup file format'))
    
  const backupData = JSON.parse(backupEntry.getData().toString('utf8'));

	const db = connection.db
	if(!db) return next(appError('DB not Found', 404, 'DB_Error')) 

	for (const [collectionName, documents] of Object.entries(backupData)) { 
		if (collectionName.startsWith('system.')) continue 
		
		const collection = db.collection( collectionName ) 	
		const docs = await collection.insertMany([...documents as any ])
		// console.log(docs)
	}

	const responseData: ResponseData = {
		status: 'success',
		message: 'restore success'
	}
	res.status(200).json( responseData )
})

