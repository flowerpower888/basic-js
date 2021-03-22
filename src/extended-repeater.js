const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || "+",
    addition: options.addition !== undefined ? String(options.addition) : "",
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || "|"
  }

  return (String(str)
    + (options.addition
      + options.additionSeparator)
      .repeat(options.additionRepeatTimes)
      .slice(0, -options.additionSeparator.length || undefined)
    + options.separator)
    .repeat(options.repeatTimes)
    .slice(0, -(options.separator.length))
};
