// // src/App.jsx
// import { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { UploadCloud } from 'lucide-react';

// export default function App() {
//   const [file, setFile] = useState(null);
//   const [formUrl, setFormUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setFormUrl('');
//     setError('');
//   };

//   const handleSubmit = async () => {
//     if (!file) {
//       setError('Please upload a .txt file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     setLoading(true);
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:3000/surveys/upload', formData);
//       setFormUrl(res?.data?.questions);
//       console.log(res?.data?.questions)
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong while uploading.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex flex-col items-center justify-center p-6">
//       <motion.h1 
//         className="text-4xl font-extrabold mb-6 text-purple-800"
//         initial={{ opacity: 0, y: -20 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.6 }}
//       >
//         Rajiv Assignment: Form Generation
//       </motion.h1>

//       <motion.label 
//         className="flex items-center space-x-2 cursor-pointer bg-white border-2 border-dashed border-blue-400 px-6 py-3 rounded-lg shadow hover:shadow-lg hover:bg-blue-50 transition-all"
//         htmlFor="file-upload"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <UploadCloud className="text-blue-600 w-6 h-6" />
//         <span className="text-blue-800 font-medium">Choose a .txt File</span>
//         <input id="file-upload" type="file" accept=".txt" onChange={handleFileChange} className="hidden" />
//       </motion.label>

//       <motion.button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 shadow-md"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {loading ? 'Uploading...' : 'Generate Google Form'}
//       </motion.button>

//       {formUrl && (
//         <motion.p 
//           className="mt-6 text-green-700 text-lg font-medium"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           Form Created: <a href={formUrl} className="underline" target="_blank" rel="noopener noreferrer">Open Form</a>
//         </motion.p>
//       )}

//       {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
//     </div>
//   );
// }

import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { UploadCloud } from 'lucide-react';

export default function App() {
  const [file, setFile] = useState(null);
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setQuestionList([]);
    setError('');
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Please upload a .txt file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:3000/surveys/upload', formData);
      setQuestionList(res?.data?.questions || []);
      console.log(res?.data?.questions);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while uploading.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <motion.h1 
        className="text-4xl font-extrabold mb-6 text-purple-800"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Rajiv Assignment: Form Generation
      </motion.h1>

      <motion.label 
        className="flex items-center space-x-2 cursor-pointer bg-white border-2 border-dashed border-blue-400 px-6 py-3 rounded-lg shadow hover:shadow-lg hover:bg-blue-50 transition-all"
        htmlFor="file-upload"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <UploadCloud className="text-blue-600 w-6 h-6" />
        <span className="text-blue-800 font-medium">Choose a .txt File</span>
        <input id="file-upload" type="file" accept=".txt" onChange={handleFileChange} className="hidden" />
      </motion.label>

      <motion.button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {loading ? 'Uploading...' : 'Generate Questions'}
      </motion.button>

      {questionList.length > 0 && (
        <div className="mt-8 w-full max-w-2xl space-y-6 bg-white p-6 rounded-lg shadow-md">
          {questionList.map((q, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">Q{idx + 1}: {q.question}</h2>
              <ul className="list-disc list-inside text-gray-700">
                {q.options?.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
    </div>
  );
}

