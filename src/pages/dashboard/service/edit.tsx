import { useParams } from 'react-router-dom'

export const EditService = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>EditService Update Form : {slug}</h2>
		</>
	)
}
