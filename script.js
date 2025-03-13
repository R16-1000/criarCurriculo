const dados = {
    nome: '',
    idade: '',
    estadoCivil: '',
    nacionalidade: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    email: '',
    escolaridade: '',
    curso: '',
    empresa: '',
    cargo: '',
    periodo: '',
    objetivo: ''
}

const btn = document.getElementById('formOk')
btn.addEventListener('click', () => {
    dados.nome = document.getElementById('nome').value
    dados.idade = document.getElementById('idade').value   
    dados.estadoCivil = document.getElementById('estadoCivil').value
    dados.nacionalidade = document.getElementById('nacionalidade').value
    dados.endereco = document.getElementById('endereco').value
    dados.numero = document.getElementById('numero').value
    dados.bairro = document.getElementById('bairro').value
    dados.cidade = document.getElementById('cidade').value 
    dados.estado = document.getElementById('estado').value 
    dados.cep = document.getElementById('cep').value
    dados.telefone = document.getElementById('telefone').value
    dados.email = document.getElementById('email').value
    dados.escolaridade = document.getElementById('escolaridade').value
    dados.curso = document.getElementById('curso').value
    dados.empresa = document.getElementById('empresa').value
    dados.cargo = document.getElementById('cargo').value
    dados.periodo = document.getElementById('periodo').value
    dados.objetivo = document.getElementById('objetivo').value

   const documento = document.getElementById('curriculo')

   documento.innerHTML = `<form>
    <h2> ${dados.nome}</h2> 
    <br><h3>Dados pessoais</h3> 
    <hr>
    <br> Idade: ${dados.idade} 
    <br> Estado civil: ${dados.estadoCivil}
    <br> Nacionalidade: ${dados.nacionalidade}
    <br> Endereço: ${dados.endereco}, ${dados.numero}, ${dados.bairro}
    <br> Cep: ${dados.cep}
    <br> Cidade: ${dados.cidade}, ${dados.estado}
    <br><br><h3>Contato</h3>
    <hr>
    <br> Telefone: ${dados.telefone}
    <br> E-mail: ${dados.email}
    <br><br><h3>Formação</h3>
    <hr>
    <br> Escolaridade: ${dados.escolaridade}
    <br> Curso: ${dados.curso}
    <br><br><h3>Experiência profissional</h3>
    <hr>
    <br> Empresa: ${dados.empresa}
    <br> Cargo: ${dados.cargo}
    <br> Período: ${dados.periodo}
    <br><br><h3>Objetivo</h3>
    <hr>
    <br> ${dados.objetivo}
    <br>
    <br><br><button type="button" onclick="gerarPDF()" id="invisivel">Gerar PDF</button>
   </form>
    ` 

})


const gerarPDF = () => {
    
    const visivel = document.getElementById('invisivel')
    visivel.style.display = 'none'
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text(document.getElementById('curriculo').innerText, 15, 15);
    
    doc.save('curriculo.pdf');
};