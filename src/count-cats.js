const CustomError = require("../extensions/custom-error");

module.exports = countCats = (matrix) => matrix.map((arr) => arr.filter(x => x == "^^")).reduce((acc, cur) => +acc + cur.length, [])
