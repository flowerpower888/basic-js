const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        arr[i + 2] == "--double-prev" || arr[i + 2] == "--discard-prev" ?  i += 2 : i += 1
        break;

      case "--discard-prev":
        arr2.pop();
        break;

      case "--double-next":
        arr2.push(arr[i + 1]);
        break;

      case "--double-prev":
        arr2.push(arr2[arr2.length - 1]);
        break;

      default:
        arr2.push(arr[i]);
        break;
    }
  }
  return arr2.filter((x) => x !== undefined);
}