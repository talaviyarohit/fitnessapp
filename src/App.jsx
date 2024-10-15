// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import WorkoutLogForm from './components/WorkoutLogForm';
import Statistics from './components/Statistics';
import Register from './components/Register';
import Login from './components/Login';



function App() {
  return (
    <Router>
   
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/log-workout" element={<WorkoutLogForm />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
