'use client'

// components/QuillEditor.tsx
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
});

interface EditorProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<EditorProps> = ({ initialValue = '', onChange }) => {
  return (
    <div className="bg-white border rounded p-4">
      <ReactQuill
        value={initialValue}
        onChange={onChange}
        theme="snow"
        className="min-h-[200px]"
      />
    </div>
  );
};

export default QuillEditor;



/*
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import sanitizeHtml from 'sanitize-html';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditorForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanContent = sanitizeHtml(content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src', 'alt'],
      },
    });
    
    // Submit cleanContent to your API
    console.log(cleanContent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditorForm;

*/

/*
yarn add react-quill
yarn add -D @types/react-quill


yarn add sanitize-html

yarn add -D @types/sanitize-html

*/





/*
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const QuillEditor = () => {
  const [content, setContent] = useState<string>('');

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quill Editor Example</h1>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        className="bg-white rounded shadow-md"
        theme="snow"
        placeholder="Write something amazing..."
      />
    </div>
  );
};

export default QuillEditor;
*/