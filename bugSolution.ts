function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct: both arguments are numbers
const result2 = add(parseInt("1", 10), 2); // Correct: string is converted to number
const result3 = add(Number("1"), 2); //Correct: string is converted to number

console.log(result1); // Output: 3
console.log(result2); // Output: 3
console.log(result3); //Output: 3