let valores = [];

function escolher(event) {
    event.preventDefault(); // Impede o envio do formulário

    let numeros = parseInt(document.getElementById('nums').value); // Convertendo o valor para número inteiro
    if (!valores.includes(numeros) && valores.length < 5) { // Verifica se o número já foi escolhido e se o usuário ainda não escolheu cinco números
        valores.push(numeros); // Adiciona o número escolhido ao array de valores
        console.log("Você escolheu o número:", numeros);
    } else if (valores.length >= 5) { // Verifica se o usuário já escolheu cinco números
        console.log("Você já escolheu cinco números. Não é possível escolher mais.");
        document.getElementById('nums').disabled = true; // Desativa o campo de entrada
    } else {
        console.log("Este número já foi escolhido. Por favor, escolha outro número.");
    }

    document.getElementById('nums').value = ""; // Limpa o campo de entrada após a escolha
}


function sortear() {
    let numerosEscolhidos = valores.map(Number); // Convertendo os números escolhidos para números inteiros
    let numerosSorteados = [];
    let acertos = 0;

    // Sorteando 5 números únicos entre 1 e 10
    while (numerosSorteados.length < 5) {
        let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        if (!numerosSorteados.includes(numeroAleatorio)) {
            numerosSorteados.push(numeroAleatorio);
        }
    }

    // Comparando com os números escolhidos pelo usuário
    for (let c = 0; c < numerosEscolhidos.length; c++) {
        if (numerosSorteados.includes(numerosEscolhidos[c])) {
            acertos++;
        }
    }

    // Exibindo os números sorteados
    document.getElementById('res').innerText = `Números Sorteados: ${numerosSorteados.join(', ')}`;

    // Exibindo a mensagem de acordo com os acertos
    if (acertos === 5) {
        res.innerHTML = "<p>Parabéns! Você acertou todos os números!</p>"
        res.innerHTML += "<p> Entraremos em contato com você em breve, considere-se um verdadeiro sortudo ! </p>"
    } else {
        res.innerHTML = `Você teve ${acertos} acerto(s).`
        
    }
}
