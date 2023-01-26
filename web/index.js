const _ = require("lodash");
const moment = require("moment");

function wiwi() {
  console.log("Lodash is here", _.join(["yes", " sir"]));
  console.log("today is: ", moment.now());
  console.log("hubo un cambio mas");
}

module.exports = { wiwi };
