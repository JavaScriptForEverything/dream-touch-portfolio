import { useParams } from 'react-router-dom'

export const EditCustomer = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>Customer Update Form : {slug}</h2>
		</>
	)
}
