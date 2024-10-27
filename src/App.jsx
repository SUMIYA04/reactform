// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import StudentsPage from './pages/StudentsPage';
import { StudentProvider } from './context/StudentContext';

function App() {
  return (
    <StudentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
