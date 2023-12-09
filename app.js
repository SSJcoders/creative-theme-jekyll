// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to your Spring Boot backend
    fetch('http://localhost:8080/api/poke/alphabet')
        .then(response => response.json())
        .then(data => {
            const pokemonListElement = document.getElementById('pokemonList');

            // Convert the entire data object to a JSON string
            const jsonString = JSON.stringify(data, null, 2); // Add formatting for better readability (optional)

            // Create a pre element to display the JSON data
            const preElement = document.createElement('pre');
            preElement.textContent = jsonString;

            // Append the pre element to the parent element
            pokemonListElement.appendChild(preElement);
        })
        .catch(error => {
            console.error('Error fetching Pokemon data:', error);
        });
});
