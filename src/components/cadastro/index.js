import './styles.css'
// import Header from '../header';

function Cadastro() {
    return (
        <main class="main-estagiario">
        <form action="" method="post" class="cadastro-estagiario">
            <h1>Cadastro de Estagiário</h1>

            {/* <!-- Dados Pessoais --> */}
            <fieldset>
                <div>
                    img
                    <legend>Dados Pessoais</legend>
                </div>
                <label for="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" placeholder="Nome Completo" required />

                <label for="dataNascimento">Data de Nascimento</label>
                <input type="date" id="dataNascimento" name="dataNascimento" required />

                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(XX) XXXXX-XXXX" pattern="\(\d{2}\)\s\d{4,5}-\d{4}" required />

                <label for="rg">RG</label>
                <input type="text" id="rg" name="rg" placeholder="RG" maxlength="12" />

                <label for="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" maxlength="14" required />
            </fieldset>

            {/* <!-- Endereço --> */}
            <fieldset>
                <legend>Endereço</legend>

                <label for="logradouro">Logradouro</label>
                <input type="text" id="logradouro" name="logradouro" placeholder="Rua / Avenida" required />

                <label for="numero">Número</label>
                <input type="text" id="numero" name="numero" placeholder="Número" required />

                <label for="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" placeholder="Bairro" required />

                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" placeholder="Cidade" required />

                <label for="estado">Estado</label>
                <input type="text" id="estado" name="estado" placeholder="Estado" maxlength="2" required />

                <label for="cep">CEP</label>
                <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="\d{5}-\d{3}" maxlength="9" required />
            </fieldset>

            {/* <!-- Dados de Acesso --> */}
            <fieldset>
                <legend>Dados de Acesso</legend>

                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="seuemail@email.com" required />

                <label for="senha">Senha</label>
                <input type="password" id="senha" name="senha" placeholder="Senha" minlength="6" required />
            </fieldset>

            {/* <!-- Dados do Estágio --> */}
            <fieldset>
                <legend>Dados do Estágio</legend>

                <label for="titulo-de-estagio">Título do Estágio</label>
                <input type="text" id="titulo-de-estagio" name="titulo-de-estagio" placeholder="Título do Estágio" required />

                <label for="tipo-de-estagio">Tipo de Estágio</label>
                <select id="tipo-de-estagio" name="tipo-de-estagio" required>
                    <option value="" disabled selected>Selecione</option>
                    <option value="obrigatorio">Obrigatório</option>
                    <option value="nao-obrigatorio">Não Obrigatório</option>
                </select>

                <label for="carga-horaria">Carga Horária</label>
                <input type="number" id="carga-horaria" name="carga-horaria" placeholder="Horas Semanais" min="1" required />

                <label for="status-remuneracao">Status de Remuneração</label>
                <input type="text" id="status-remuneracao" name="status-remuneracao" placeholder="Ex: Remunerado / Não Remunerado" />

                <label for="data-inicio">Data de Início</label>
                <input type="date" id="data-inicio" name="data-inicio" required />

                <label for="data-termino">Data de Término</label>
                <input type="date" id="data-termino" name="data-termino" required />

                <label for="funcionario-supervisor">Funcionário Supervisor</label>
                <input type="text" id="funcionario-supervisor" name="funcionario-supervisor" placeholder="Nome do Supervisor" />

                <label for="observacoes">Observações</label>
                <textarea id="observacoes" name="observacoes" placeholder="Digite observações adicionais"></textarea>
            </fieldset>

            {/* <!-- Dados Acadêmicos --> */}
            <fieldset>
                <legend>Dados Acadêmicos</legend>

                <label for="nome-faculdade">Nome da Faculdade</label>
                <input type="text" id="nome-faculdade" name="nome-faculdade" placeholder="Faculdade" required />

                <label for="curso">Curso</label>
                <input type="text" id="curso" name="curso" placeholder="Curso" required />

                <label for="periodo">Período</label>
                <input type="text" id="periodo" name="periodo" placeholder="Período" required />

                <label for="previsao-formatura">Previsão de Formatura</label>
                <input type="date" id="previsao-formatura" name="previsao-formatura" required />

                <label for="ra">R.A</label>
                <input type="text" id="ra" name="ra" placeholder="Registro Acadêmico" required />
            </fieldset>

            {/* <!-- Botão --> */}
            <button type="submit">Cadastrar</button>
        </form>
    </main>
    );
}

export default Cadastro;