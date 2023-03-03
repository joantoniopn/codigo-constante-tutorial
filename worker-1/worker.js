// Aqui estou fazendo a requisição do pokemon
const getPokemon = async (pokemon) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const mensagens = await response.json();
        return mensagens;
    } catch (e) {
        return [];
    }
}

const templatePokemon = (pokemon = []) => {
    return `
        <div>
            <h1>Nome: ${pokemon.name}</h1>
            <p>Peso: ${pokemon.weight}</p>
            <p>Altura: ${pokemon.height}</p>
        </div>
    `;
}

// Esse ouvinte irá aguardar a chamada do worker
addEventListener('message', function(e) {
    let data = e.data;
    getPokemon(data.pokemon).then(response => {
        postMessage({ response: templatePokemon( response )});
    }).catch(erro => {
        postMessage({ response: templatePokemon () });
        console.error(erro);
    });
});