// incrementGenerator.js

const first = parseInt(prompt("Enter start value:"), 10);
const last = parseInt(prompt("Enter end value:"), 10);

if (isNaN(first) || isNaN(last) || first >= last) {
  alert("Invalid input! Make sure start < end and both are valid numbers.");
} else {
  const result = [];

  let current = first;
  while (current <= last) {
    result.push(current);

    if (current < 50) {
      current += 2;
    } else if (current < 120) {
      current += 5;
    } else {
      current += 10;
    }
  }

  alert("Generated values: " + result.join(", "));
  console.log("Generated values:", result);
}
