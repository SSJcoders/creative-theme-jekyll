function generatePokeballs() {
    const nthInput = document.getElementById('nthInput');
    const nthValue = parseInt(nthInput.value);

    if (isNaN(nthValue) || nthValue < 0) {
      alert('Please enter a valid non-negative integer for n.');
      return;
    }

    if (nthValue > 25){
      if (!confirm("Numbers larger than 25 will hang the browser. Continue!"))
        return;
    }
  
    const methodSelect = document.getElementById('methodSelect');
    const method = methodSelect.value;
  
    const startTime = performance.now(); // Start measuring time
  
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
  
    const endTime = performance.now(); // Stop measuring time
    const generationTime = endTime - startTime;
  
    displayPokeballs(result, generationTime);
  }
  
  function displayPokeballs(count, generationTime) {
    const pokeballContainer = document.getElementById('pokeballContainer');
    pokeballContainer.innerHTML = '';
  
    for (let i = 0; i < count; i++) {
      const pokeball = createPokeball(i + 1);
      pokeballContainer.appendChild(pokeball);
    }
  
    // Display the generation time
    const generationTimeElement = document.getElementById('generationTime');
    generationTimeElement.innerText = `Generation Time: ${generationTime.toFixed(2)} ms`;
  }
  
  function createPokeball(number) {
    const pokeball = document.createElement('div');
    pokeball.className = 'pokeball';
    pokeball.innerText = number;
    return pokeball;
  }
  