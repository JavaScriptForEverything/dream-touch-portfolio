import { BreadCrumbs } from '@/components'
import SiteMap from '@/components/footer/siteMap'

const Service = () => {

	return (
		<div className='min-h-screen '>
			<div className="px-2 md:px-20">
				<BreadCrumbs />
			</div>
			
			<div className="bg-slate-100/50 min-h-full px-2 md:px-20">
				<SiteMap className='text-slate-700' 
					titleClass=''
					childClass=' hover:text-slate-950'
					/>
			</div>
		</div>
	)
}
export default Service
