import { useParams } from 'react-router-dom'

export const ViewMetadata = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>View Metadata details: { slug } </h2>
		</>
	)
}
