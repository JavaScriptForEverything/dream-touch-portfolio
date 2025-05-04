import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import { useState } from 'react'

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
});

const QuillEditor = () => {
	const [ content, setContent ] = useState()

	const changeHandler = (data: string) => {
		
		console.log({ data })
	}

	return (
		<>
			<ReactQuill 
				value={content}
				onChange={changeHandler}
			/>
		
		</>
	)
}
export default QuillEditor
