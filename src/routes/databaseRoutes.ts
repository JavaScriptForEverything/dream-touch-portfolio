import { Router } from 'express'
import * as databaseController from '@/controllers/databaseController'


// => /api/database/
export const router = Router()

router.post('/clean', databaseController.cleanDB)
router.get('/backup', databaseController.backupDB)
router.post('/restore', databaseController.restoreDB)
