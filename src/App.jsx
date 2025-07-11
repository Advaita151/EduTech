import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  

  return (
    <Routes>
      <Route path="/student" element={<Dashboard isAdmin={false} />} />
      <Route path="/admin" element={<Dashboard isAdmin={true} />} />
      <Route path="/adminD" element={<AdminDashboard/>} />
    </Routes>
  )
}

export default App
