import Link from 'next/link'
import Image from 'next/image'
import { ClientRating } from './clientRating'


type Props = {
	title: string
	rating: number
	price: string
	image: string
	path: string
}
export const ProductComponent = ({ title, rating, price, image, path }: Props) => {

	return (
		<div className="flex flex-col p-3  border border-slate-300 rounded-md">
			<Link href={path}>
				<p className="text-2xl text-shadow font-medium capitalize max-w-72 truncate hover:text-slate-800">{title}</p>
			</Link>
			<div className="flex-1 flex gap-2">
				<div className="mt-1">
					<ClientRating value={rating} readOnly size='small' />
					<p className="text-2xl mt-4">{price}</p>
				</div>

				<div className="flex-1 relative ">
					<Image src={image} alt={image} fill={true} sizes='200px' className='object-contain' />
				</div>
			</div>
		</div>
	)
}
