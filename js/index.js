function calculator(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const product = num1 * num2;
  const quot = num1 / num2;
  console.log("sum:" + sum);
  console.log("Difference: " + diff);
  console.log("product:" + product);
  console.log("quotient:" + quot);
  console.log("Type of quotent: " + typeof quot);
}

calculator(200, 56);
