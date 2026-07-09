
function rollDice() {

const diceResult = document.getElementById("diceResult");            
const diceImages = document.getElementById("diceImages");           
const numOfDice = document.getElementById("numOfDice").value; // Declarando fora da função faz com que o numOfDice seja fixo na primeira vez que a página carrega
const values = [];    //Declaramos as variáveis dentro desta função para que sejam atualizadas a cada chamada da função e não acumulem a cada clique
const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="imagens/Dice-${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}