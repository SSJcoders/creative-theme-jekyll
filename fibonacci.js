// Recursive Fibonacci calculation
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  
  // Iterative Fibonacci calculation
  function fibonacciIterative(n) {
    if (n <= 1) return n;
  
    let prev = 0;
    let current = 1;
  
    for (let i = 2; i <= n; i++) {
      const next = prev + current;
      prev = current;
      current = next;
    }
  
    return current;
  }
  
  // Matrix-based Fibonacci calculation
  function power(matrix, n) {
    if (n <= 1) return matrix;
  
    let result = power(matrix, Math.floor(n / 2));
    result = multiply(result, result);
  
    if (n % 2 !== 0) {
      const baseMatrix = [[1, 1], [1, 0]];
      result = multiply(result, baseMatrix);
    }
  
    return result;
  }
  
  function multiply(matrix1, matrix2) {
    const a = matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0];
    const b = matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1];
    const c = matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0];
    const d = matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1];
  
    return [[a, b], [c, d]];
  }
  
  function fibonacciMatrix(n) {
    const baseMatrix = [[1, 1], [1, 0]];
    const resultMatrix = power(baseMatrix, n - 1);
    return resultMatrix[0][0];
  }
  