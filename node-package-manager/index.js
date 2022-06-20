const _ = require('lodash');

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (num) => num % 2);

console.log(myOddEvenArray);