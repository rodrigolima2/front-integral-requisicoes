const pokemon = document.querySelector('#pokemon');
const nomePokemon = document.querySelector('.card h1');
const imagemPokemon = document.querySelector('.card img');
const habilidadesPokemon = document.querySelector('.card span');

pokemon.addEventListener('change', () => {
    const pesquisa = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}`);

    pesquisa.then(res => {
        if (!res.ok) {
            alert('Pokemon não existe.');
            return;
        }

        const body = res.json();

        body.then((body) => {
            const habilidades = [];

            for (i = 0; i < body.abilities.length; i++) {
                habilidades[i] = body.abilities[i].ability.name[0].toUpperCase() + body.abilities[i].ability.name.substr(1).toLowerCase();
            }

            const habilidadesStr = habilidades.join(', ');

            nomePokemon.textContent = body.name[0].toUpperCase() + body.name.substr(1).toLowerCase();
            imagemPokemon.src = body.sprites.front_default;
            habilidadesPokemon.textContent = `Habilidades: ${habilidadesStr}`;
        });
    });
});