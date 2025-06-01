import { useParams } from 'react-router-dom'

export const EditNotification = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>Notification Update Form : {slug}</h2>
		</>
	)
}
