import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial/index.js';
import TelaCadastro from './pages/TelaCadastro/index.js';
import TelaLogin from './pages/TelaLogin/index.js';
import TelaEquipe from './pages/TelaEquipe/index.js'
import TelaContato from './pages/TelaContato/index.js';
import TelaCadastroEstagiario from './pages/TelaCadastroEstagiario/index.js';
import TelaCadastroFuncionario from './pages/TelaCadastroFuncionario/index.js'; // Importar
import TelaCadastroFaculdade from './pages/TelaCadastroFaculdade/index.js';   // Importar
import ProtectedRoute from './components/ProtectedRoute.js';

const Dashboard = () => {
  return <h1>Bem-vindo ao Dashboard! (Página Protegida)</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/login" element={<TelaLogin />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/sobre" element={<TelaEquipe />} />
      <Route path="/contato" element={<TelaContato />} />
      <Route path="/cadastroEstagiario" element={<TelaCadastroEstagiario />} />
      {/* Novas Rotas Adicionadas */}
      <Route path="/cadastroFuncionario" element={<TelaCadastroFuncionario />} />
      <Route path="/cadastroFaculdade" element={<TelaCadastroFaculdade />} />

      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;