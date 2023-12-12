function generatePokeballs() {
    const nthInput = document.getElementById('nthInput');
    const nthValue = parseInt(nthInput.value);
  
    if (isNaN(nthValue) || nthValue < 0) {
      alert('Please enter a valid non-negative integer for n.');
      return;
    }
  
    const methodSelect = document.getElementById('methodSelect');
    const method = methodSelect.value;
  
    let result;
  
    switch (method) {
      case 'recursive':
        result = fibonacciRecursive(nthValue);
        break;
      case 'iterative':
        result = fibonacciIterative(nthValue);
        break;
      case 'matrix':
        result = fibonacciMatrix(nthValue);
        break;
      default:
        result = 0;
    }
  
    displayPokeballs(result);
  }
  
  function displayPokeballs(count) {
    const pokeballContainer = document.getElementById('pokeballContainer');
    pokeballContainer.innerHTML = '';
  
    for (let i = 0; i < count; i++) {
      const pokeball = createPokeball(i + 1);
      pokeballContainer.appendChild(pokeball);
    }
  }
  
  function createPokeball(number) {
    const pokeball = document.createElement('div');
    pokeball.className = 'pokeball';
    pokeball.innerText = number;
    return pokeball;
  }
  