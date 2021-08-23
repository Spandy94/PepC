let fs = require('fs');
let path = require('path');
let inputArr = process.argv.slice(2);
let inputDir = inputArr[0];

let allEntities = fs.readdirSync(inputDir);
console.log(allEntities);