import { useParams } from 'react-router-dom'

export const ViewPage = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>View Page details: { slug } </h2>
		</>
	)
}
