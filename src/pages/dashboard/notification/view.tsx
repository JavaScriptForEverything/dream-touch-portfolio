import { useParams } from 'react-router-dom'

export const ViewNotification = () => {

	const { slug } = useParams()
	console.log({ slug })

	return (
		<>
			<h2>View Notification details: { slug } </h2>
		</>
	)
}
