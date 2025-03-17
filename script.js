const dadosBtn = document.getElementById('formOk');

dadosBtn.addEventListener('click', () => {

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

    const documento = document.getElementById('curriculo')
    documento.innerHTML = ` <h2> ${nome}</h2> 
    <br><h3>Dados pessoais</h3>
    <hr>
    <br> Idade: ${idade} <br> Estado civil: ${estadoCivil} <br> Nacionalidade: ${nacionalidade} <br> Endereço: ${endereco}, ${numero}, ${bairro} <br> Cep: ${cep} <br> Cidade: ${cidade}, ${estado} 
    <br><br><h3>Contato</h3>`

    // Gerar PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text(`${nome}`, 100, 15 ,{ align: 'center' });

    doc.text(`Dados pessoais`, 15, 30);

    doc.text(`Idade: ${idade}`, 15, 42);
    doc.text(`Estado civil: ${estadoCivil}`, 15, 49);
    doc.text(`Nacionalidade: ${nacionalidade}`, 15, 56);
    doc.text(`Endereço: ${endereco}, ${numero}, ${bairro}`, 15, 63);
    doc.text(`CEP: ${cep}`, 15, 70);
    doc.text(`Cidade: ${cidade}, ${estado}`, 15, 77);

    doc.text(`Contato`, 15, 89);

    doc.text(`Telefone: ${telefone}`, 15, 101);
    doc.text(`Email: ${email}`, 15, 108);
    
    doc.text(`Formação`, 15, 123);

    doc.text(`Escolaridade: ${escolaridade}`, 15, 135);
    doc.text(`Curso: ${curso}`, 15, 142);

    doc.text(`Experiência profissional`, 15, 167);

    doc.text(`Empresa: ${empresa}`, 15, 179);
    doc.text(`Cargo: ${cargo}`, 15, 186);
    doc.text(`Período: ${periodo}`, 15, 193);

    doc.text(`Objetivo profissional`, 15, 205);
    
    doc.text(`Objetivo: ${objetivo}`, 15, 217);

    doc.save('curriculo.pdf');
});
// ------------------------------ configuração do PDF ------------------------------
(function (api, $) {
	'use strict';
	api.writeText = function (x, y, text, options) {
		options = options || {};

		var defaults = {
			align: 'left',
			width: this.internal.pageSize.width
		}

		var settings = $.extend({}, defaults, options);

		// Obter tamanho de fonte atual
		var fontSize = this.internal.getFontSize();

        // Obtenha a largura real do texto 
        // /* Você multiplica a largura da unidade da sua string pelo tamanho da sua fonte e divide 
        // * pelo fator de escala interno. A divisão é necessária 
        // * para o caso em que você usa unidades diferentes de 'pt' no construtor 
        // * do jsPDF. 
        // */

		var txtWidth = this.getStringUnitWidth(text) * fontSize / this.internal.scaleFactor;

		if (settings.align === 'center')
			x += (settings.width - txtWidth) / 2;
		else if (settings.align === 'right')
			x += (settings.width - txtWidth);

		//o padrão é alinhamento 'esquerdo'
		this.text(text, x, y);

	}

})(jsPDF.API, jQuery);


// ------------------------------ Fim configuração do PDF ------------------------------

