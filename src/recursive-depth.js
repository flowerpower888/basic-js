const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let element of arr) {
      if (Array.isArray(element)) {
        let next = this.calculateDepth(element) + 1;
        if (next > depth) {
          depth = next;
        }
      }
    }
    return depth;
  }
}