const params = new URLSearchParams(window.location.search);
const numero = params.get("numero");

async function drawPokemon(id) {
    const pokemon = await getPokemon("pokemon/" + id);

    document.title = `Pokemon - ${capitalizeFirstLetter(pokemon.name)}`;

    document.getElementById("anterior").innetHTML = await getPokemonAnterior(
        pokemon.id
    );
    document.getElementById("proximo").innerHTML = await getPokemonProximo(
        pokemon.id
    );

    document.querySelector("h1").innerHTML = `${pokemon.id
        .toString()
        .padstart(3, "0")} - ${capitalizeFirstLetter(pokemon.name)}`;

    let descriptions = await getPokemon("pokemon-species/" + pokemon.id);
    let description = Array.from(descriptions.flavor_text_entries).filter(
        (item) => item.language.name == "en"
    );

    document.getElementById("descricao").innetHTML =
            description[0].flavor_text.replace("\f", " ");

        document.getElementById("imgPoke").innetHTML = carousel(pokemon.sprites);
        document.getElementById("altura").innetHTML = `${pokemon.height / 10} m`;
        document.getElementById("peso").innetHTML = `${pokemon.weight / 10} kg`;

        let buttons = document.getElementById("tipos");
        buttons.innerHTML = "";
        pokemon.types.forEach((value, index) => {
            let name = getTipo(value.type.name);
            buttons.innerHTML += `<button class="btn btn-lg btn-${name} text-white">${name}</button>`;
        });

        let sons = document.getElementById("sons");
        sons.innerHTML = `<span class="fw-bold mb-0 me-2">Sons:</span>`;
        if (pokemon.cries.latest != null)
            sons.innerHTML += `<i class="bi bi-play-circle fs-1 me-3"
                onclick="document.getElementById('latest').play()"></i><audio controls id='latest' hidden>
                <source src="${pokemon.cries.latest}" type="audio/ogg"></audio>`;
        if (pokemon.cries.legacy != null)
            sons.innerHTML += `<i class="bi bi-play-circle fs-1"
            onclick="document.getElementById('legacy').play()"




    }
    
}