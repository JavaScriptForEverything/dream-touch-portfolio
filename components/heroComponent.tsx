import Link from 'next/link'
import { Button } from './mui'

type Props = React.ComponentProps<'div'> & {
	title: string
	description: string
	image: string
	path: string
}
export const HeroComponent = (props: Props) => {
	const { title, description, image, path, className } = props

	return (
		<div key={title}
			className={`${className} bg-no-repeat bg-cover overflow-y-hidden aspect-video rounded-md text-slate-50`}
			style={{ backgroundImage: `url(${image})` }} 
		>
			<div className="bg-slate-900/30 h-full flex flex-col justify-end gap-2 p-4">
				<h2 className=' text-2xl md:text-4xl font-bold text-shadow'>{title}</h2>
				<p className=''>{description}</p>

				<Link href={path}>
					<Button color='primary' variant='contained' className='self-start' >Shop Now</Button>
				</Link>
			</div>
		</div>
	)
}
