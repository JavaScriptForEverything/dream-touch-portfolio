import { BreadCrumbs } from '@/components'
import SiteMap from '@/components/footer/siteMap'

const Service = () => {

	return (
		<div className='min-h-screen '>
			<BreadCrumbs />
			
			<div className="bg-slate-100/50 min-h-full -mx-8 lg:-mx-20 px-8 lg:px-20">
				<SiteMap className='text-slate-700' 
					titleClass=''
					childClass=' hover:text-slate-950'
					/>
			</div>
		</div>
	)
}
export default Service
