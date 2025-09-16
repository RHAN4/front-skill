import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial/index.js';
import TelaCadastro from './pages/TelaCadastro/index.js';
import TelaLogin from './pages/TelaLogin/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;