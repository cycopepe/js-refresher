//import { apiKey, apiKey2 } from "./utils.js";
import * as utils from "./utils.js";
import * as variables from "./variables.js";
import * as functions from "./functions";
import * as arrays from "./arrays";
import * as dec from "./destructuring.js";
import * as spread from "./spread.js";

// import usage
console.log("IMPORT USAGE");
console.log(utils.apiKey, utils.apiKey2);
console.log(utils.default);
console.log("###################################");

// variables
console.log("VARIABLES USAGE");
variables.default();
console.log("###################################");

// variables
console.log("FUNTIONCS USAGE");
functions.default("a parameter from app.js");
console.log("###################################");

// arrays
console.log("ARRAYS USAGE");
arrays.default();
console.log("###################################");

console.log("destructuring USAGE");
dec.default();
console.log("###################################");

console.log("spread USAGE");
spread.default();
console.log("###################################");
