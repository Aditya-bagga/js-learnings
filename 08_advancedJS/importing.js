//Module Import file

//default import
import multiply from "./mathOperation.js"
console.log(multiply(3,4));

//named import

import{add , subtract} from "./mathOperation.js";
console.log(add(3,4));
console.log(subtract(4,3));