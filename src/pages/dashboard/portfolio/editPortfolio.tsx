import { useParams } from 'react-router-dom'

export const EditPortfolio = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>Portfolio Update Form : {slug}</h2>
		</>
	)
}
