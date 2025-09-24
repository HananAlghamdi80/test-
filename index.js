const _ = require("lodash");

function greet(name) {
  return `Hello, ${_.capitalize(name)}!`;
}

console.log("🚀 I am a DevOps Engineer!");


module.exports = greet;
