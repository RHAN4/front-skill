import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Importação das suas PÁGINAS (verifique se os nomes e caminhos estão corretos)
import TelaInicial from './pages/TelaInicial'; 
import TelaLogin from './pages/TelaLogin';
import TelaSobre from './pages/TelaEquipe';
import TelaContato from './pages/TelaEquipe';
import TelaDashboard from './pages/TelaDashboard'; 
import TelaCadastro from './pages/TelaCadastro'; 

// --- NOVAS ROTAS DE CADASTRO ---
import TelaCadastroEstagiario from './pages/TelaCadastroEstagiario';
import TelaCadastroFaculdade from './pages/TelaCadastroFaculdade';
import TelaCadastroFuncionario from './pages/TelaCadastroFuncionario';


function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* --- ROTAS PÚBLICAS --- */}
        <Route path="/" element={<TelaInicial />} />
        <Route path="/sobre" element={<TelaSobre />} />
        <Route path="/contato" element={<TelaContato />} />
        <Route path="/login" element={<TelaLogin />} />
        
        {/* --- ROTAS DE CADASTRO --- */}
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/cadastroEstagiario" element={<TelaCadastroEstagiario />} />
        <Route path="/cadastroFaculdade" element={<TelaCadastroFaculdade />} />
        <Route path="/cadastroFuncionario" element={<TelaCadastroFuncionario />} />
        
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