'use client'
import { useState } from 'react'
import { BreadCrumbs } from '@/components'
import ContactForm from '../contact-us/contactForm'
import { CallRingIcon } from '@/icons'
import { contactInfo } from '@/data/home'
import Image from 'next/image'

const faqData = [
    {
        question: "What services does Dream Touch Interiors offer?",
        answer: "We specialize in interior design for custom furniture, including doors, chairs, tables, and more. Our services include personalized design recommendations, manufacturing, and delivery."
    },
    {
        question: "How can I place an order?",
        answer: "You can place an order by submitting an inquiry through our website or contacting us directly. Our team will guide you through the process."
    },
    {
        question: "What is the estimated delivery time for custom furniture?",
        answer: "The delivery time depends on the complexity of the design and the type of furniture. Typically, it takes 2-4 weeks for custom orders to be completed and delivered."
    },
    {
        question: "Do you offer warranties on your furniture?",
        answer: "Yes, we offer warranties on our furniture to ensure customer satisfaction. The warranty details will be provided at the time of purchase."
    },
    {
        question: "How can I contact Dream Touch Interiors for support?",
        answer: "You can contact us at <a href='mailto:info@dreamtouch.com.bd' class='text-blue-600 underline'>info@dreamtouch.com.bd</a> or call our customer support team for assistance."
    }
]

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)
	const [searchQuery, setSearchQuery] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 3

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	const filteredFAQs = faqData.filter(faq =>
		faq.question.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const paginatedFAQs = filteredFAQs.slice(
		(currentPage - 1) * itemsPerPage, currentPage * itemsPerPage
	)

	const totalPages = Math.ceil(filteredFAQs.length / itemsPerPage)

	return (
		<div className='min-h-screen'>
			<div className="p-2 md:px-20">
				<BreadCrumbs />
			</div>
				
			<div className="bg-slate-100/10 py-2 mb-40">
				<h1 className="text-slate-900 text-center text-2xl md:text-4xl font-extrabold my-6 md:my-8 capitalize">
					Frequently Asked Questions
				</h1>

				<div className="px-6 md:px-12 lg:px-24 text-slate-700 leading-relaxed">

					<div className="text-slate-700 leading-relaxed grid grid-cols-12 gap-4 mb-12 items-center justify-center ">
						<div className="col-span-12 md:col-span-9 ">
							<input
								type="text"
								placeholder="Search FAQs..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full px-4 py-2.5 border border-slate-300 
								rounded-lg focus:outline-none focus:border-red-200"
							/>
						</div>

						<div className="col-span-1 hidden md:flex gap-3 items-center justify-start ">
							<div className="">
								<CallRingIcon />
							</div>
							<div className="">
								<p className="text-slate-400 text-xs">Call us now</p>
								<p className="text-slate-900 font-bold 
									whitespace-nowrap
								">{contactInfo.phone}</p>
							</div>
						</div>
					</div>


					<div className="space-y-4">
						{paginatedFAQs.map((faq, index) => (
							<div
								key={index}
								className="border border-slate-300 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full text-left px-4 py-3 bg-slate-100 
									hover:bg-slate-200 focus:outline-none focus:ring focus:ring-blue-500 flex justify-between items-center"
								>
									<span className="text-lg font-semibold">{faq.question}</span>
									<span className="text-xl">
										{activeIndex === index ? '-' : '+'}
									</span>
								</button>
								{activeIndex === index && (
									<div className="px-4 py-3 bg-white"
										dangerouslySetInnerHTML={{ __html: faq.answer }}
									></div>
								)}
							</div>
						))}
					</div>

					<div className="flex justify-center items-center mt-6 space-x-2">
						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i}
								onClick={() => setCurrentPage(i + 1)}
								className={`px-4 py-2 rounded-lg ${
									currentPage === i + 1
										? 'bg-red-500 text-white'
										: 'bg-slate-200 hover:bg-slate-300'
								}`}
							>
							{i + 1}
							</button>
						))}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

						<div className="mt-12 col-span-12 md:col-span-7">
							<h2 className="text-2xl font-bold text-center mb-4 text-slate-900">
								Have Question?
							</h2> 

							<ContactForm />
						</div>


						<div className="mt-12 col-span-12 md:col-span-5
							hidden
							md:flex items-center justify-center
						">
							<div data-name='image-container' className="relative w-full h-60 md:h-96 ">
								<Image 
									src={'/images/contact-us/interior-design-help-line.webp'}
									alt='modern interior design studio'
									fill
									className=' object-cover '
								/>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	)
}

export default FAQ