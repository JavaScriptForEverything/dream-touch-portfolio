import { useParams } from 'react-router-dom'

export const ViewUser = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>View User details: { slug } </h2>
		</>
	)
}
