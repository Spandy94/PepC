let fs = require('fs');
let path = require('path');
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

// let fileArr = fs.readdirSync('D:/Pepcoding/PepC/File Organizer/DIR');
// console.log(fileArr);

let srcPath = 'D:/Pepcoding/PepC/File Organizer/FSmodule/f1.txt';
let destPath = 'D:/Pepcoding/PepC/File Organizer/FSmodule/f2.txt';
let toBeCopiedFileName = path.basename(srcPath);
let dest = path.join('D:/Pepcoding/PepC/File Organizer/DIR', toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcPath,destPath);
fs.copyFileSync(srcPath,dest);



