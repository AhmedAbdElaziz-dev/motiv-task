import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

import CarCard from './components/CarCard';
import Cars from './pages/cars';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<Cars />} />
      </Route>
    </Routes>
  );
}

export default App;
