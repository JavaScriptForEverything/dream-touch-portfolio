import { BreadCrumbs } from '@/components'

const privacyPolicyData = [
    {
        title: "1. Information We Collect",
        content: "We may collect personal information such as your name, email address, phone number, and address when you:",
        list: [
            "Submit an inquiry through our website.",
            "Request a quote for custom doors, chairs, or tables.",
            "Subscribe to our newsletter or promotional offers."
        ]
    },
    {
        title: "2. How We Use Your Information",
        content: "We use the information collected to:",
        list: [
            "Provide personalized interior design recommendations.",
            "Process orders and deliver custom furniture, including doors, chairs, and tables.",
            "Send updates about our products, services, and promotions."
        ]
    },
    {
        title: "3. Sharing Your Information",
        content: "We do not sell or share your personal information with third parties, except as necessary to:",
        list: [
            "Fulfill your orders (e.g., with shipping providers).",
            "Comply with legal obligations."
        ]
    },
    {
        title: "4. Data Security",
        content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse."
    },
    {
        title: "5. Your Rights",
        content: `You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:privacy@dreamtouch.com.bd" class="text-blue-600 underline">privacy@dreamtouch.com.bd</a>.`
    },
    {
        title: "6. Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date."
    }
];

const PrivacyPolicy = () => {
    return (
        <div className='min-h-screen'>
            <BreadCrumbs />
            
            <div className="bg-slate-100/50 py-2 mb-40">
                <h1 className="text-slate-900 text-center text-4xl font-extrabold my-6 md:my-8 capitalize">
                    Privacy Policy
                </h1>

                <div className="px-6 md:px-12 lg:px-24 text-slate-700 leading-relaxed">
                    <p>
                        At Dream Touch Interiors, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website or services related to interior design for doors, chairs, tables, and other furniture.
                    </p>

                    {privacyPolicyData.map((section, index) => (
                        <div key={index} className="mt-6">
                            <h2 className="text-2xl font-bold">{section.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
                            {section.list && (
                                <ul className="list-disc ml-6">
                                    {section.list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    <p className="mt-6">
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@dreamtouch.com.bd" className="text-blue-600 underline">info@dreamtouch.com.bd</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy