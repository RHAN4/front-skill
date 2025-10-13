import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Importação das suas PÁGINAS (verifique os nomes e caminhos)
import TelaInicial from './pages/TelaInicial'; 
import TelaLogin from './pages/TelaLogin';
import TelaCadastro from './pages/TelaCadastro'; 
import TelaSobre from './pages/TelaEquipe';
import TelaContato from './pages/TelaEquipe';
import TelaDashboard from './pages/TelaDashboard'; 

function App() {
  return (
    <AuthProvider>
      {/* O <Router> foi removido daqui */}
      <Routes>
        {/* --- ROTAS PÚBLICAS --- */}
        <Route path="/" element={<TelaInicial />} />
        <Route path="/sobre" element={<TelaSobre />} />
        <Route path="/contato" element={<TelaContato />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        
        {/* --- ROTA PROTEGIDA (PRIVADA) --- */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <TelaDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Rota padrão para qualquer outro caminho */}
        <Route path="*" element={<TelaInicial />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;