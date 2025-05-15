import { ForwardIcon } from '@/icons'
import Link from 'next/link'

interface Props {
	label: string
	icon: React.ReactNode
	href?: string
}
export const DiagonallySlicedButton = ({ label, icon, href='#' }: Props) => {
	return (
		<Link href={href} className="
			px-3 py-3
			bg-slate-800 
			relative
			text-white
			rounded-lg
			inline-block
			group 
		">
			<div className="relative z-10 flex justify-evenly items-center gap-8">
				<span>{label}</span>
				<span className='px-4'> {icon} </span>
			</div>

			<span className="
				px-6 py-3 
				absolute inset-0
				bg-red-600 rounded-lg

				[clip-path:polygon(0_0,75%_0,65%_100%,0%_100%)]
				group-hover:[clip-path:polygon(0_0,0%_0,0%_100%,0%_100%)] 
				transition-all duration-300 
			"></span>
		</Link>
	)
}












export function SlicedButton() {
  return (
    <div className="my-6">
      <button
        className="
          relative inline-flex items-center justify-between
          text-white font-medium
          px-6 py-3 rounded-lg
          bg-[linear-gradient(75deg,_#FF0000_30%,_#FF0000_35%,_#000000_35%,_#000000_70%)] 
          hover:bg-[linear-gradient(75deg,_#FF0000_60%,_#FF0000_65%,_#000000_65%,_#000000_100%)] 
          transition-all duration-300
          w-56
        "
      >
        <span>More About Us</span>
        <ForwardIcon className="w-6 h-6" />
      </button>
    </div>
  );
}