console.log('hello from app.js!')

// with vanilla js
// const pokemonForm = document.getElementById('pokemon-form');
//
// const handlePokemonForm = (event) => {
//   event.preventDefault();
//   console.log('hello from SUBMIT!')
//
//   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(res => res.json())
//   .then(data => console.log(data))
// }
//
// pokemonForm.addEventListener('submit', handlePokemonForm);


// with jQuery
const pokemonForm = $('#pokemon-form')
const pokemonImg = $('#pokemon-img')
const pokemonName = $('#pokemon-name')
const pokemonAbilities = $('#pokemon-abilities')

const handlePokemonForm = (event) => {
  event.preventDefault();
  console.log('hello from SUBMIT!')
  
  const pokemonInput = $('#pokemon').val()
  
  $.ajax({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`
  }).done(response => {
      if(!response.name) {
        pokemonImg.attr('src', 'https://www.clipartmax.com/png/full/129-1298464_open-pokeball-download-open-pokeball.png')
        pokemonName.text('Pokemon not found :(')
        pokemonAbilities.empty()
        return
      }
      
      pokemonImg.attr('src', response.sprites.front_default)
      pokemonName.text(response.name)
      
      pokemonAbilities.empty()
      for (const ab of response.abilities) {
        const abilityMarkup = `<li>${ab.ability.name}</li>`;
        pokemonAbilities.append(abilityMarkup)
      }
    });
}

pokemonForm.submit(handlePokemonForm)
