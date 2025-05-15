'use client'

interface Props {
	error: Error
	reset: () => void
}
const Error = ({ error, reset }: Props) => {

	return (
		<>
			<h2>This is error page</h2>

			<pre>
				{JSON.stringify(error, null, 2)}
			</pre>

			<button onClick={() => reset()}>Reset</button>
		</>
	)
}
export default Error
