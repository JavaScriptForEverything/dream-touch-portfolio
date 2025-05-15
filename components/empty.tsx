import Image from 'next/image'

interface Props {
	text?: string
}

export const Empty = ({ text }: Props) => {

	return (
		<div className="bg-white  border border-slate-100 py-12 flex flex-col items-center justify-center">
			<Image 
				src='/images/pages/empty.png'
				alt='empty design'
				width={200}
				height={200}
				className="object-cover "
			/>
			<p className="">{text || 'It is an empty page'}</p>
		</div>
	)
}
