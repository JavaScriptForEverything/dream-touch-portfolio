import { BreadCrumbs } from '@/components'

const termsAndConditionsData = [
    {
        title: "1. Acceptance of Terms",
        content: "By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our website."
    },
    {
        title: "2. Use of Services",
        content: "Our services are intended for personal, non-commercial use. You agree not to misuse our services or use them for any unlawful purposes."
    },
    {
        title: "3. Intellectual Property",
        content: "All content on this website, including text, images, and designs, is the property of Dream Touch Interiors and is protected by copyright laws. You may not reproduce, distribute, or use any content without prior written permission."
    },
    {
        title: "4. Orders and Payments",
        content: "When placing an order for custom furniture, you agree to provide accurate information. Payments must be made as per the agreed terms, and we reserve the right to cancel orders in case of non-compliance."
    },
    {
        title: "5. Limitation of Liability",
        content: "Dream Touch Interiors is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services."
    },
    {
        title: "6. Changes to Terms",
        content: "We reserve the right to update these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page."
    }
];

const TermsAndConditions = () => {
    return (
			<div className='min-h-screen'>
				<div className="px-2 md:px-20">
					<BreadCrumbs />
				</div>
				
				<div className="bg-slate-100/50 py-2 mb-40">
						<h1 className="text-slate-900 text-center text-4xl font-extrabold my-6 md:my-8 capitalize">
								Terms and Conditions
						</h1>

						<div className="px-2 md:px-20 text-slate-700 leading-relaxed">
								<p>
										Welcome to Dream Touch Interiors. These Terms and Conditions govern your use of our website and services related to interior design for doors, chairs, tables, and other furniture. Please read them carefully.
								</p>

								{termsAndConditionsData.map((section, index) => (
										<div key={index} className="mt-6">
												<h2 className="text-2xl font-bold">{section.title}</h2>
												<p>{section.content}</p>
										</div>
								))}

								<p className="mt-6">
										If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@dreamtouch.com.bd" className="text-blue-600 underline">info@dreamtouch.com.bd</a>.
								</p>
						</div>
				</div>
			</div>
    )
}

export default TermsAndConditions