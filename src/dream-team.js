const CustomError = require("../extensions/custom-error");

module.exports = createDreamTeam = (members) => Array.isArray(members) ? members
  .filter(x => typeof x == "string")
  .map(x => x.trim()[0].toUpperCase())
  .sort()
  .join("")
  : 
  false
