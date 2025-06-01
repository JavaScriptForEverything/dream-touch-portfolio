import { useParams } from 'react-router-dom'

export const EditMetadata = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>Metadata Update Form : {slug}</h2>
		</>
	)
}
