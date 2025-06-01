import { useParams } from 'react-router-dom'

export const ViewService = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>View Service details: { slug } </h2>
		</>
	)
}
