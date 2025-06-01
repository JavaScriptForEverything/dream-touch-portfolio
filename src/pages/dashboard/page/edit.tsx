import { useParams } from 'react-router-dom'

export const EditPage = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>Page Update Form : {slug}</h2>
		</>
	)
}
