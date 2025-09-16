import './styles.css';
import Header from '../../components/header';
import Cadastro from '../../components/cadastro';

function TelaCadastro() {
    return(
        <div className="pag_cadastro-container">
            <Header />
            { <Cadastro />}
        </div>
    );
}

export default TelaCadastro;