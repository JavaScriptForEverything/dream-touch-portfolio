import { useParams } from 'react-router-dom'

export const ViewCustomer = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>View Customer details: { slug } </h2>
		</>
	)
}
