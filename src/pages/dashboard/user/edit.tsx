import { useParams } from 'react-router-dom'

export const EditUser = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>User Update Form : {slug}</h2>
		</>
	)
}
