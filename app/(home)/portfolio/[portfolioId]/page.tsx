'use client'
import { BreadCrumbs } from '@/components'
import { useParams, usePathname } from 'next/navigation'

const longUrl = 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-eius-reiciendis-nihil-iusto-dolorum-aliquid-voluptas'

const PortfolioDetailsPage = () => {
	const pathname = usePathname()
	const { portfolioIdOrSlug } = useParams()

	return (
		<>
		<BreadCrumbs />
		<div className="">
			{(pathname)}

			<pre>
			{(portfolioIdOrSlug)}
			</pre>
		</div>
		
		</>
	)
}
export default PortfolioDetailsPage
