// Function to generate Pokeballs based on user input
function generatePokeballs() {
  // Get user input for n
  const nthInput = document.getElementById('nthInput');
  const nthValue = parseInt(nthInput.value);

  // Validate user input
  if (isNaN(nthValue) || nthValue < 0) {
    alert('Please enter a valid non-negative integer for n.');
    return;
  }

  // Warn the user about potential browser hang for large n
  if (nthValue > 25 && !confirm("Numbers larger than 25 will hang the browser. Continue!")) {
    return;
  }

  // Get selected method
  const methodSelect = document.getElementById('methodSelect');
  const method = methodSelect.value;

  // Measure the start time for performance analysis
  const startTime = performance.now();

  let result;

  // Choose the Fibonacci calculation method based on user selection
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

  // Measure the end time and calculate generation time
  const endTime = performance.now();
  const generationTime = endTime - startTime;

  // Display the generated Pokeballs and generation time
  displayPokeballs(result, generationTime);
}

// Function to display Pokeballs and generation time
function displayPokeballs(count, generationTime) {
  const pokeballContainer = document.getElementById('pokeballContainer');
  pokeballContainer.innerHTML = '';

  // Create Pokeballs based on the count
  for (let i = 0; i < count; i++) {
    const pokeball = createPokeball(i + 1);
    pokeballContainer.appendChild(pokeball);
  }

  // Display the generation time
  const generationTimeElement = document.getElementById('generationTime');
  generationTimeElement.innerText = `Generation Time: ${generationTime.toFixed(2)} ms`;
}

// Function to create a single Pokeball element
function createPokeball(number) {
  const pokeball = document.createElement('div');
  pokeball.className = 'pokeball';
  pokeball.innerText = number;
  return pokeball;
}
