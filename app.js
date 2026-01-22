alert('Boas-vindas ao jogo do Número Secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// Váriavel do número secreto
console.log(numeroSecreto);
// Váriavel do número que será escolhido
let numeroEscolhido;
let qtdTentativas = 1;

// Enquanto - repetição
while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o número escolhido for igual ao número secreto
    if (numeroSecreto == numeroEscolhido) {
        break;
    } else {
        if (numeroSecreto > numeroEscolhido) {
            alert(`O número secreto é maior que ${numeroEscolhido}`);
        } else {
            alert(`O número secreto é menor que ${numeroEscolhido}`);
        }
        // qtdTentativas = qtdTentativas + 1;
        qtdTentativas++;

    }
}

let palavraTentativa = qtdTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou! O Número Secreto é ${numeroSecreto} com ${qtdTentativas} ${palavraTentativa}!`);

// if (qtdTentativas > 1) {
//     alert(`Acertou! O Número Secreto é ${numeroSecreto} com ${qtdTentativas} tentativas!`);
// } else {
//     alert(`Acertou! O Número Secreto é ${numeroSecreto} com ${qtdTentativas} tentativa!`);
// }