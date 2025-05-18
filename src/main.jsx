import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPreview from './FormPreview.jsx';
createRoot(document.getElementById('root')).render(

<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/form-preview" element={<FormPreview />} />
  </Routes>
</BrowserRouter>
)
