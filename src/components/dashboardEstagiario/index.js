import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import * as api from '../../services/api';
import './styles.css';

const TabsNavegacao = ({ abaAtiva, onTabChange }) => (
    <nav className="tabs-nav-container">
        <button className={`tab-button ${abaAtiva === 'informacoes' ? 'active' : ''}`} onClick={() => onTabChange('informacoes')}>Informações</button>
        <button className={`tab-button ${abaAtiva === 'competencias' ? 'active' : ''}`} onClick={() => onTabChange('competencias')}>Competências</button>
        <button className={`tab-button ${abaAtiva === 'feedbacks' ? 'active' : ''}`} onClick={() => onTabChange('feedbacks')}>Feedbacks</button>
        <button className={`tab-button ${abaAtiva === 'conquistas' ? 'active' : ''}`} onClick={() => onTabChange('conquistas')}>Conquistas</button>
    </nav>
);

const AbaInformacoes = ({ dadosEstagiario }) => (
    <section className="info-pessoal-card">
        <div className="card-header">
            <h3>Informações Pessoais</h3>
            <p>Seus dados cadastrais</p>
        </div>
        <div className="card-content-grid">
            <div className="info-field"><span className="info-label">Nome:</span><span className="info-value">{dadosEstagiario.nome}</span></div>
            <div className="info-field"><span className="info-label">Email:</span><span className="info-value">{dadosEstagiario.email}</span></div>
            <div className="info-field"><span className="info-label">Telefone:</span><span className="info-value">{dadosEstagiario.telefone}</span></div>
            <div className="info-field"><span className="info-label">CPF:</span><span className="info-value">{dadosEstagiario.cpf}</span></div>
        </div>
    </section>
);

function DashboardEstagiario() {
    const { user } = useAuth();
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [abaAtiva, setAbaAtiva] = useState('informacoes');

    useEffect(() => {
        const fetchData = async () => {
            if (!user || !user.roles) { setLoading(false); return; };
            try {
                setLoading(true);
                let data;
                if (user.roles.includes('ROLE_ESTAGIARIO')) {
                    data = await api.getEstagiarioDashboard();
                }
                setDashboardData(data);
            } catch (err) {
                setError('Falha ao carregar os dados do dashboard.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [user]);

    if (loading) return <main className="dashboard-main-content"><div>Carregando...</div></main>;
    if (error) return <main className="dashboard-main-content"><h2>{error}</h2></main>;
    if (!dashboardData) return <main className="dashboard-main-content"><div>Nenhum dado encontrado.</div></main>;

    return (
        <main className="dashboard-main-content">
            <div className="painel-header-container">
                <h1 className="painel-titulo">Painel do <span>Estagiário</span></h1>
                <p className="painel-subtitulo">Bem-vindo(a), {dashboardData.dadosEstagiario.nome}</p>
            </div>
            <TabsNavegacao abaAtiva={abaAtiva} onTabChange={setAbaAtiva} />
            <div className="conteudo-aba-container">
                {abaAtiva === 'informacoes' && <AbaInformacoes dadosEstagiario={dashboardData.dadosEstagiario} />}
            </div>
        </main>
    );
}

export default DashboardEstagiario;