var acaoEscolhida = "";
var valorTela = "";
var valorAntigoTela = "";

function botaoDigitoClick(event) {
    var digito = event.target.value;
    atualizaTela(`${valorTela}${digito}`);
}

function botaoAcaoClick(event) {
    var acao = event.target.value;
    rodarAcao(acao);
}

function atualizaTela(valor) {
    var tela = document.getElementById("tela");
    valorTela = valor;
    tela.innerHTML = valorTela;
}

function rodarAcao(acao) { 
    if (acao === '=') {
        var resultado;
        if (acaoEscolhida === "+") {
            resultado = parseInt(valorAntigoTela) + parseInt(valorTela);
        }

        if (acaoEscolhida === "-") {
            resultado = parseInt(valorAntigoTela) - parseInt(valorTela);
        }
        
        if (acaoEscolhida === "*") {
            resultado = parseInt(valorAntigoTela) * parseInt(valorTela);
        }
        
        if (acaoEscolhida === "/") {
            resultado = parseInt(valorAntigoTela) / parseInt(valorTela);
        }

        atualizaTela(resultado);


    } else { 
        valorAntigoTela = valorTela;
        atualizaTela("");
        acaoEscolhida = acao;
    }
}