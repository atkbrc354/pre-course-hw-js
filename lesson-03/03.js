function getFibonacciNumber(index) {
  debugger;
  const arrFibonacci = [0, 1];
  for (let i = 2; i <= index; i += 1) {
    const num1 = arrFibonacci[i - 1];
    const num2 = arrFibonacci[i - 2];
    arrFibonacci.push(num1 + num2);
  }
  return arrFibonacci[index];
}

  console.log(getFibonacciNumber(8));
  console.log(getFibonacciNumber(10));
