function divide(x, y) {
    // Check if the divisor (y) is not zero to avoid division by zero
    if (y !== 0) {
      return x / y;
    } else {
      console.error("Cannot divide by zero!");
      return undefined; // or you can choose to handle it in a different way
    }
  }
