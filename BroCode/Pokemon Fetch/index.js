async function fetchData() {

    try {

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();    // Criei variável para selecionar o pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);  // Usei a variável para definir qual pokemon vou buscar

        if (!response.ok) {
            throw new Error("Could not fetch resource!");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;     // Acessei a propriedade que traz a imagem do pokemon da API
        const imgElement = document.getElementById('pokemonSprite');  // Variável onde vou mostrar a imagem do pokemon na tela

        imgElement.src = pokemonSprite;     // A src do elemento imagem será a variável com a propriedade da imagem que vem da API
        imgElement.style.display = "block"; // Uso display = "block" para mostrar a imagem que antes estava none
    } 
    catch (error) {
        console.error(error);
    }
}
