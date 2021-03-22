const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date || !date.getTime()) {
    return 'Unable to determine the time of year!'
  }
  
  const seasons = {
    winter: [12, 01, 02],
    spring: [03, 04, 05],
    summer: [06, 07, 08],
    autumn: [09, 10, 11]
  }
  for (let season in seasons) {
    if (seasons[season].includes(date.getMonth() + 1))
      return season
  }
};
