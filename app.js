$(document).ready(function () {
    // Make an AJAX request to the backend API endpoint
    $.ajax({
        url: '/api/poke',
        method: 'GET',
        success: function (data) {
            // Handle the response data
            displayPokemonList(data);
        },
        error: function (error) {
            console.error('Error fetching Pokemon list:', error);
        }
    });
});

function displayPokemonList(data) {
    // Assume the data structure is { "pokemon": [ {"name": "pokemon1"}, {"name": "pokemon2"}, ... ] }
    var pokemonList = data.pokemon;

    // Create HTML content to display the list
    var htmlContent = '<ul>';
    for (var i = 0; i < pokemonList.length; i++) {
        htmlContent += '<li>' + pokemonList[i].name + '</li>';
    }
    htmlContent += '</ul>';

    // Update the content of the #pokemonList div
    $('#pokemonList').html(htmlContent);
}
