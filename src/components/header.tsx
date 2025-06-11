import { useAppSelector } from '@/hooks/redux'
import { MailIcon, NotificationIcon } from '@/icons'
import { IconButton } from '@/components/ui'
import { useState } from 'react'
// import { ORIGIN } from '@/lib/config'
// import * as userReducer from '@/store/userReducer'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const iconItems = [
	{ 
		label: 'notification', 	
		Icon: NotificationIcon, 
		path: '/notification'
	},
	{ 
		label: 'message', 	
		Icon: MailIcon, 
		path: '/message'
	},
] as const 

type LabelValues = typeof iconItems[number]['label']  				// "notification" | "message"
const initialNotification:Record<string, boolean> = {} 
iconItems.forEach( (item ) => initialNotification[item.label] = true )


// src/components/Header.tsx
export default function Header() {
	const { user } = useAppSelector(state => state.user)
	const [ notification, setNotification ] = useState( initialNotification )


	const avatarClickHandler = (name: LabelValues) => () => {
		setNotification( prev => ({ ...prev, [name]: !prev[name] }))
	}

	const iconClickHandler = (label: string) => () => {
		console.log({ label })
	}


  return (
    <header className="bg-white shadow px-4 py-2 border-b border-slate-200 
		flex items-center justify-between
		">

      <h1 className="text-xl font-bold ">Admin Dashboard</h1>

			<div className="flex gap-2 items-center">

				{/* --- avatar block --- */}
				<img 
					src={user?.avatar?.secure_url || '/default.jpg'}
					width={30}
					height={30}
					className='p-0.5 object-cover peer size-10 rounded-full
					overflow-auto
					border border-slate-300
					hover:scale-105 transition-all duration-200
					hover:border-blue-300
					'
					onClick={avatarClickHandler('notification')}
				/>


				{/* --- name block --- */}
				<div className='flex flex-col text-sm'>
					<span className='text-slate-800 font-bold capitalize line-clamp-1 max-w-20'>
						{user?.name || 'riajul islam'}
					</span>
					<small className='text-slate-500 font-light -mt-1 lowercase line-clamp-1 max-w-20 '>
						{user?.role?.replace('_', ' ') || 'super admin'}
					</small>
				</div>

				{/* --- icons block --- */}
				<div className="ml-4 flex gap-1">
					{iconItems.map( ({ label, Icon, path }) => (
						<div key={label} className='relative flex flex-col items-center gap-0.5'>
							<IconButton onClick={iconClickHandler(path)}>
								<span className={`${notification[label as keyof typeof notification] ? 'block' : 'hidden' } rounded-full size-0.5 p-0.5 bg-orange-600 absolute top-[5px] `} />
								<Icon className='size-6'/>
							</IconButton>
						</div>
					))}
				</div>

			</div>

    </header>
  );
}
