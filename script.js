const dadosBtn = document.getElementById('formOk');

dadosBtn.addEventListener('click',()=>{

    //dados pessoais
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const estadoCivil = document.getElementById('estadoCivil').value
    const nacionalidade = document.getElementById('nacionalidade').value
    const endereco = document.getElementById('endereco').value
    const numero = document.getElementById('numero').value
    const bairro = document.getElementById('bairro').value
    const cidade = document.getElementById('cidade').value 
    const estado = document.getElementById('estado').value
    const cep = document.getElementById('cep').value

    //dados de contato
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value

    //dados profissionais
    const escolaridade = document.getElementById('escolaridade').value
    const curso = document.getElementById('curso').value

    //experiencia profissional
    const empresa = document.getElementById('empresa').value
    const cargo = document.getElementById('cargo').value
    const periodo = document.getElementById('periodo').value

    //objetivo profissional
    const objetivo = document.getElementById('objetivo').value

    const documento = document.getElementById('dadosTexto')
    documento.innerHTML = ` <h2> ${nome}</h2> 
    <br><h3>Dados pessoais</h3>
    <hr>
    <br> Idade: ${idade} <br> Estado civil: ${estadoCivil} <br> Nacionalidade: ${nacionalidade} <br> Endereço: ${endereco}, ${numero}, ${bairro} <br> Cep: ${cep} <br> Cidade: ${cidade}, ${estado} 
    <br><br><h3>Contato</h3>
    <hr>
    <br> Telefone: ${telefone} <br> E-mail: ${email}  
    <br><br><h3>Formação</h3>
    <hr>
    <br> Escolaridade: ${escolaridade} <br> Curso: ${curso}
    <br><br><h3>Experiência profissional</h3>
    <hr>
    <br> Empresa: ${empresa} <br> Cargo: ${cargo} <br> Período: ${periodo}
    <br><br><h3>Objetivo</h3>
    <hr>
    <br> ${objetivo}`
    
    // alert(` Nome: ${nome} \n Idade: ${idade} \n Endereço: ${endereco} \n Cep: ${cep} \n Telefone: ${telefone}`);
})

