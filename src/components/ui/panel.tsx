import { leftPanelListItems } from '@/data/leftPanel'
import { DashboardIcon, LogoutIcon } from '@/icons'
import { Link } from 'react-router-dom'




const Panel = () => {

	return (
		<div className="">
			<div className="flex">
				<div className="flex h-screen w-16 flex-col justify-between border-e border-gray-100 bg-white">
					<div>
						<div className="inline-flex size-16 items-center justify-center">
							<span
								className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
							>
								<Link to='/dashboard'>
									<DashboardIcon className='size-6 text-orange-500' />
								</Link>
							</span>
						</div>

						<div className="border-t border-gray-200">
							<div className="px-2">

								<ul className="space-y-4 border-t border-gray-200 pt-4">
									{leftPanelListItems.map( ({ label, Icon, path }) => (
										<li key={label}>
											<Link to={path} className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-200/80 hover:text-gray-700" >
												<Icon className='size-6 opacity-75' />
												<span className="capitalize invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-orange-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible" > { label} </span>
											</Link>
										</li>
									))}
								</ul>

							</div>
						</div>
					</div>

					<div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
						<a href="#" className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" >
							<LogoutIcon />
							<span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible" > Logout </span>
						</a>
					</div>
				</div>

				<div className="hidden md:flex h-screen flex-1 flex-col justify-between border-e border-gray-100 bg-white">
					<div className="px-4 py-6">
						<ul className="mt-14 space-y-1">
							<li>
								<a
									href="#"
									className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
								>
									General
								</a>
							</li>

							<li>
								<details className="group [&_summary::-webkit-details-marker]:hidden">
									<summary
										className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
									>
										<span className="text-sm font-medium"> Teams </span>

										<span className="shrink-0 transition duration-300 group-open:-rotate-180">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="size-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										</span>
									</summary>

									<ul className="mt-2 space-y-1 px-4">
										<li>
											<a
												href="#"
												className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Banned Users
											</a>
										</li>

										<li>
											<a
												href="#"
												className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Calendar
											</a>
										</li>
									</ul>
								</details>
							</li>

							<li>
								<a
									href="#"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									Billing
								</a>
							</li>

							<li>
								<a
									href="#"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									Invoices
								</a>
							</li>

							<li>
								<details className="group [&_summary::-webkit-details-marker]:hidden">
									<summary
										className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
									>
										<span className="text-sm font-medium"> Account </span>

										<span className="shrink-0 transition duration-300 group-open:-rotate-180">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="size-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										</span>
									</summary>

									<ul className="mt-2 space-y-1 px-4">
										<li>
											<a
												href="#"
												className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Details
											</a>
										</li>

										<li>
											<a
												href="#"
												className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Security
											</a>
										</li>

										<li>
											<a
												href="#"
												className="w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Logout
											</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
				</div> 
			</div>

		</div>
	)
}
export default Panel
