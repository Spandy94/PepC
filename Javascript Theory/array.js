// let arr = [];
// let arr = new Array();
// console.log(arr);

// let arr = ["spandan" , 23, 45.4, true, 'b'];
// console.log(arr);

// arr.push("hello");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length);

// let arr = [];
// arr[25] = 5;
// console.log(arr[0]);

// let str1 = "Spandan";
// let str2 = "Spandan Samal";
// let str3 = "Apple, Mango, Banana";

// console.log(str1.split(""));
// console.log(str2.split(" "));
// console.log(str3.split(","));

// let arr = ["a","b","c","d"];

// console.log(arr.join(""));
// console.log(arr.join("#"));
// console.log(arr.join("|"));

// let arr = [1,2,3,4,5,6];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]); //content
// }

// //traverse and get the indexes
// for (let i in arr){
//     console.log(i); //indexes
// }

// //white - string
// //yellow - integer

// //traverse and get the values
// for (let i of arr){
//     console.log(i); //indexes
// }

// console.log("a" + 1 + 2); // string concatenation(BODMAS)
// console.log(1+2+"a"); //first integer addition, then concatenation
// console.log(String.fromCharCode("a".charCodeAt(0)+1));

//most important methods of array

//MAP
// let arr = [1,2,3,4,5,6,7,8];

// for(let i=0 ; i<arr.length; i++){
//     arr[i] += 2;
// }

// arr = arr.map(function(value){
//     return value+2;
// });
// console.log(arr);

// function callBackFn(value){
//     return value+2;
// }
// arr = arr.map(callBackFn);
// console.log(arr);

// console.log(arr.slice(1,5));
// arr.splice(1,5); //splice deletes the taken index
// console.log(arr);

//FILTER

//SORT

//INCLUDES
// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.includes(7));


let arr = [100,60];
console.log(arr.sort());



