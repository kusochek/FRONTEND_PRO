import Calculator from "./Calculator.js";

class Sum extends Calculator {
  constructor(x, y) {
    super(x, y);
  }

  sum() {
    return this.x + this.y;
  }
}

export default Sum;
