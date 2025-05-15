import { EmailIcon, PhoneIcon } from '@/icons'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from './contactForm'
import { IconButton } from '@/components/mui'
import { contactUsSocialIcons } from '@/data'
import { BreadCrumbs } from '@/components'
import { contactInfo } from '@/data/footer'

const ContactUs = () => {

	const phone = contactInfo.find(item => item.label === 'phone')
	const email = contactInfo.find(item => item.label === 'email')

	return (
		<>
			<div className="p-2 md:px-20">
				<BreadCrumbs />
			</div>

			<div data-name='image-container' className="relative w-full h-60 md:h-96 ">
				<Image 
					src={'/images/contact-us/contact-us.png'}
					alt='modern interior design studio'
					fill
					className=' object-cover '
				/>
			</div>

			<div className="p-2 md:px-20">
				<h1 className="mt-20 text-red-600/80 text-2xl md:text-4xl font-extrabold mb-4">Let's talk with us</h1>

				<div data-name="talk-with-us-container" className=" grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mt-8 ">
					<div data-name="talk-with-us" className="col-span-12 md:col-span-7 flex flex-col ">

						<p className="text-slate-500 text-justify">
							Whether you're looking to transform your home or create a stunning commercial space, we are here to bring your vision to life. Our team of expert designers is ready to assist you with innovative ideas, personalized solutions, and unmatched dedication. Let’s create something extraordinary together—reach out to us today!
						</p>

						<div className="">
							<div className="mt-8 text-slate-500 text-justify">
								<p className="text-slate-800">You can also reach us at:</p>

								<div className="flex items-center gap-2 mt-4">
									<span className="w-5 h-5 text-red-500"><PhoneIcon /></span>
									<span>
										{phone && phone.href && phone.placeholder && (
											<Link href={phone.href} className="text-slate-500 hover:text-red-500 transition">
												{phone.placeholder}
											</Link> 
										)}
									</span>

								</div>

								<div className="flex items-center gap-2 mt-4">
									<span className="w-5 h-5 text-red-500"><EmailIcon /></span>
									<span>
										{email && email.href && email.placeholder && (
											<Link href={email.href} className="text-slate-500 hover:text-red-500 transition">
												{email.placeholder}
											</Link> 
										)}
									</span>
								</div>
							</div>

							<div className="mt-auto py-12 flex items-center gap-2">
								{contactUsSocialIcons.map(({ label, Icon, path }) => (
									<IconButton key={label} color={'error'} size='small'>
										<Link href={path} title={label} target='_blank'>
											<Icon className="w-5 h-5 text-slate-50" />
										</Link>
									</IconButton>
								))}


							</div>
						</div>
					</div>

					<div data-name="contact-up-form" className="col-span-12 md:col-span-5">
						<h1 className="text-red-600/80 text-xl font-extrabold mb-4">Send Message</h1>
						<ContactForm isAutoFocus={true} />
					</div>
				</div>
			</div>
		</>
	)
}
export default ContactUs
