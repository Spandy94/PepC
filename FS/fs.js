const fs = require("fs");

// console.log(fs.readFileSync("a.txt","utf-8"));
// console.log(fs.existsSync("a.txt"));
// console.log(fs.existsSync("b.txt"));

// fs.writeFileSync("a.txt","how are you?");
// fs.writeFileSync("b.txt","hello my name is spandan");

// console.log(process.argv[2].split(" "))


//concatenating 2 files
let file1name = process.argv[2];
let file2name = process.argv[4];

let file1data = fs.readFileSync(file1name,"utf-8");
let file2data = fs.readFileSync(file2name,"utf-8");
console.log(file1data+ "\n" + file2data);