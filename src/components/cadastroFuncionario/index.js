import './styles.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastrarFuncionario } from '../../services/api';
import useMensagem from '../../hooks/useMensagem';
import MensagemFeedback from '../mensagemFeedback';

function CadastroFuncionario() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        cargo: 'SUPERVISOR',
        empresaCnpj: ''
    });
    const { mensagem, tipoMensagem, visivel, exibirMensagem, fecharMensagem } = useMensagem();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Limpa a formatação do CNPJ antes de enviar
        const payload = {
            ...formData,
            empresaCnpj: formData.empresaCnpj.replace(/\D/g, '')
        };

        try {
            await cadastrarFuncionario(payload);
            exibirMensagem('Funcionário cadastrado com sucesso! Redirecionando...', 'sucesso');
            setTimeout(() => { navigate('/login'); }, 2000);
        } catch (err) {
            exibirMensagem(err.message || 'Ocorreu um erro no cadastro.', 'erro');
        }
    };

    return (
        <main className="main-funcionario">
            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onClose={fecharMensagem}
            />
            <form onSubmit={handleSubmit} className="cadastro-funcionario">
                <h1>Cadastro de supervisor</h1>
                
                <fieldset className="dados-pessoais">
                    <legend>
                        <img src='/assets/images/icone-pessoa.png' alt='icone-pessoa' />
                        Dados pessoais
                    </legend>
                    <label>Nome completo <br />
                        <input type="text" name="nome" placeholder="Nome completo" required value={formData.nome} onChange={handleChange} />
                    </label>
                    <label>E-mail corporativo<br />
                        <input type="email" name="email" placeholder="seuemail@empresa.com" required value={formData.email} onChange={handleChange} />
                    </label>
                </fieldset>
                
                <fieldset className="dados-acesso">
                    <legend>
                        <img src='/assets/images/icone-cadeado.png' alt='icone-cadeado' />
                        Dados de acesso e trabalho
                    </legend>
                    <label>Senha<br />
                        <input type="password" name="senha" placeholder="Senha" minLength="6" required value={formData.senha} onChange={handleChange} />
                    </label>
                    <label>Cargo<br />
                        <select name="cargo" value={formData.cargo} onChange={handleChange} required>
                            <option value="SUPERVISOR">Supervisor</option>
                            <option value="GERENTE">Gerente</option>
                            <option value="ADMIN">Administrador</option>
                        </select>
                    </label>
                    <label>CNPJ da empresa<br />
                        <input type="text" name="empresaCnpj" placeholder="Digite o CNPJ da sua empresa" required value={formData.empresaCnpj} onChange={handleChange} />
                    </label>
                </fieldset>
                
                <br />
                <button type="submit">Cadastrar</button>
                <br />
            </form>
        </main>
    );
}

export default CadastroFuncionario;