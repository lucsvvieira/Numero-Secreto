function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido')
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log(`Valor inválido: O número secreto precisa estar entre ${menorValor } e ${maiorValor}`)
    }

}

function chuteForInvalido(numero) {
    return number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
