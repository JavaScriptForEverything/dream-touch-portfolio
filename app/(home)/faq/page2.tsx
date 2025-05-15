'use client'
import { useState } from 'react'
import { BreadCrumbs } from '@/components'
import ContactForm from '../contact-us/contactForm'
import { CallRingIcon } from '@/icons'

const faqData = [
	{
		category: '',
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
	},

]

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)
	const [searchQuery, setSearchQuery] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 3
	const [selectedFaq, setSelectedFaq] = useState(0)

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
			<div className="px-2">
				<BreadCrumbs />
			</div>
				
			<div className="bg-slate-100/50 py-2 mb-40">

				<div className="px-6 text-slate-700 leading-relaxed
					grid grid-cols-12 gap-4
					mb-12
					items-center justify-center
				">
					<div className="col-span-1 md:col-span-4">
						{/* <div className="
							border border-slate-300 rounded-md
						">
							<select name="" className="w-full 
							px-4 py-2
							">
								<option className='
									
								'> Category one</option>
							</select>
						</div> */}
					</div>
					<div className="col-span-1 md:col-span-5 ">
						<input
							type="text"
							placeholder="Search FAQs..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="col-span-1 md:col-span-3
						flex gap-3
						items-center justify-start
					">
						<CallRingIcon />
						<div className="">
							<p className="text-slate-400 text-xs">Call us now</p>
							<p className="text-slate-900 font-bold 
								whitespace-nowrap
							">+880 1957500605</p>
						</div>
					</div>

				</div>


				<div className="px-6 text-slate-700 leading-relaxed
					grid grid-cols-12 gap-12
					mb-12
				">

					<div className="col-span-12 md:col-span-3 border border-red-100/50 hover:border-red-100 rounded p-4">
						<p className='text-red-600 text-center font-bold text-2xl mb-6'>FAQ</p>

						<div data-name='faq-container' className="max-h-96 overflow-y-scroll ">
							<ul className='flex flex-col gap-0.5'>
								{faqData.map( (faq, index) => (
									<li key={faq.question} className={`
										px-1.5 py-1 rounded line-clamp-1
										cursor-pointer
										hover:bg-red-100
										${selectedFaq === index ? 'bg-red-600 hover:bg-red-600/90 text-slate-100' : ''}
									`}
									onClick={() => { setSelectedFaq(index)}}
									>{faq.question}</li>
								))}
							</ul>
						</div>
					</div>

					<div className="col-span-12 md:col-span-9">
						<h2 className='font-bold text-slate-800 border-b border-slate-300 mb-8 py-2 '
							dangerouslySetInnerHTML={{ __html: faqData[selectedFaq].question }}
						/> 
						<p dangerouslySetInnerHTML={{ __html: faqData[selectedFaq].answer }} /> 
					</div>

				</div>

				<div className="px-6 text-slate-700 leading-relaxed">
					<p className="text-center mb-8">
						Welcome to the FAQ section of Dream Touch Interiors. Here, you'll find answers to some of the most common questions about our services and products.
					</p>



					{/* FAQ Accordion */}
					<div className="space-y-4">
						{paginatedFAQs.map((faq, index) => (
							<div
								key={index}
								className="border border-slate-300 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full text-left px-4 py-3 bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
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

					{/* Pagination */}
					{/* <div className="flex justify-center items-center mt-6 space-x-2">
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
					</div> */}

					{/* Contact Us Form */}
					<div className="grid grid-cols-12">
						<div className="mt-12 col-span-12 md:col-span-5">
							<h2 className="text-2xl font-bold text-center mb-4 text-red-600">
								Have Question?
							</h2>

							<ContactForm />

							{/* <form className="space-y-4">
								<div>
										<label className="block text-sm font-medium mb-1">Name</label>
										<input
												type="text"
												placeholder="Your Name"
												className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
								</div>
								<div>
										<label className="block text-sm font-medium mb-1">Email</label>
										<input
												type="email"
												placeholder="Your Email"
												className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
								</div>
								<div>
										<label className="block text-sm font-medium mb-1">Message</label>
										<textarea
												placeholder="Your Message"
												className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
												rows={4}
										></textarea>
								</div>

								<button
										type="submit"
										className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
								>
										Submit
								</button>
							</form> */}

						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default FAQ