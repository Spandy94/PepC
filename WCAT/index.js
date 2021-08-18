#!/usr/bin/env node

const fs = require("fs"); //import
let arguments = process.argv.slice(2);
// console.log(arguments)

let flags = [];
let filenames = [];
let secondaryArguments = [];

for(let i of arguments){
    if(i[0] == "-"){
        flags.push(i);
    }else if(i[0] = "%"){
        secondaryArguments.push(i.slice(1));
    }else{
        filenames.push(i);
    }
}

// if(flags.length == 0 && filenames.length != 0){
//     for(let file of filenames){
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// }


//REMOVE SPACES FROM FILES
// if(flags.length == 0){
//     for(let file of filenames){
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// }else{
//     for(let flag of flags){
//         if(flag == "-rs"){
//             for(let file of filenames){
//                 let fileData =fs.readFileSync(file,"utf-8");
//                 console.log(fileData.split(" ").join(""));
//             }
//         }
//     }
// }

//Improved code of removal of spaces
for(let file of filenames){
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags){
        if(flag == "-rs"){
            fileData = fileData.split(" ").join("");
        }
        if(flag == "-rn"){
            fileData = removeAll(fileData, "\r\n");
        }
        if(flag == "-rsc"){
            for(let secondaryArgument of secondaryArguments){
                fileData = removeAll(fileData,secondaryArgument);
            }
            fileData = tempString;
        }
    }
    console.log(fileData);
}

function removeAll(string, removeData){
    return string.split(removalData).join("");
}

function addSequence(content){
    let contentArr = content.split("\n");
    for(let i=0; i<contentArr.length; i++){
        contentArr[i] = (i+1)+" "+ contentArr[i];
    }
    return contentArr;
}

function addSequenceTnel(content){
    let contentArr = content.split("\n");
    let count = 1;
    for(let i=0; i<contentArr.length; i++){
        if(contentArr[i] != ""){
            contentArr[i] = count + " " + contentArr[i];
            count++;
        }
    }
    return contentArr;
}