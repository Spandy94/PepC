let fs = require('fs');
// let content = fs.readFileSync('f1.txt');
// console.log(content + "");

// fs.writeFileSync('abc.txt', 'timon, pumba, simba');
// fs.appendFileSync('abc.txt', 'hakuna matata');
// fs.unlinkSync('abc.txt');

// fs.mkdirSync('pathModule'); //make directory
// fs.rmdirSync('pathModule'); //delete directory

// let doesExist = fs.existsSync('fs1.js');
// console.log('fs1.js file',doesExist);

// let statusObj= fs.lstatSync('f1.txt');
// console.log(statusObj);

// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

let fileArr = fs.readdirSync('D:/Pepcoding/PepC/File Organizer/DIR');
console.log(fileArr);



