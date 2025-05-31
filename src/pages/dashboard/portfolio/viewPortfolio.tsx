import { useParams } from 'react-router-dom'

export const ViewPortfolio = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>View Portfolio details: { slug } </h2>
		</>
	)
}
