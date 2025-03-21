import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './Components/LoginPage';
import Calendar from './Components/Calendar'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />  
        <Route path="/calendar" element={<Calendar />} /> 
      </Routes>
    </Router>
  );
}

export default App;
