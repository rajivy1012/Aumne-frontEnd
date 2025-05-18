// src/FormPreview.jsx
import { useEffect, useState } from 'react';

export default function FormPreview() {
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const data = query.get('data');
    if (data) {
      try {
        const parsed = JSON.parse(decodeURIComponent(data));
        setQuestions(parsed);
      } catch (err) {
        console.error('Invalid form data', err);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen p-6 bg-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-purple-700">Form Preview</h1>

      {submitted ? (
        <p className="text-green-600 font-semibold">Thank you for submitting the form!</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
          {questions.map((q, idx) => (
            <div key={idx}>
              <h2 className="font-medium text-lg mb-2">Q{idx + 1}: {q.question}</h2>
              <div className="space-y-1">
                {q.options.map((opt, i) => (
                  <label key={i} className="block">
                    <input
                      type="radio"
                      name={`q${idx}`}
                      value={opt}
                      className="mr-2"
                      required
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
