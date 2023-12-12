// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to your Spring Boot backend
    fetch('http://localhost:8080/api/poke/alphabet')
      .then(response => response.json())
      .then(data => {
        const pokemonListElement = document.getElementById('pokemonList');
  
        // Iterate through the list and append each Pokemon name to the list
        data.results.forEach(pokemon => {
          const listItem = document.createElement('li');
          listItem.textContent = pokemon.name;
          pokemonListElement.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
      });
  });
  