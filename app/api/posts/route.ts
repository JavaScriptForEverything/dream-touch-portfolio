import { NextResponse } from 'next/server'

export const GET = () => {
	
	return NextResponse.json({
		data: [
			{
				id: '1',
				name: 'title 1'
			},
			{
				id: '2',
				name: 'title 2'
			},
		]})
}