// src/FormPreview.jsx
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import FormPreview from './FormPreview';

export default function Index() {
 

  return (
   <>
<Routes>
    <Route path="/" element={<App />} />
    <Route path="/form-preview" element={<FormPreview />} />
  </Routes>
   </>
  );
}
