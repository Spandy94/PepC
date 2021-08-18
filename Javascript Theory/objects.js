// let person = {
//     "name" : "Spandan",
//     age : 26,
//     0 : "hello"
// }
// console.log(person["name"]);
// console.log(person.name);
// console.log(person.age);
// console.log(person);
// console.log(person[0])

// Array.prototype.name = "Spandan";
// String.prototype.len = function(){
//     console.log(this.length);
// }
// // let arr = [1,2,3,4];
// // console.log(arr.name);
// let str = "spandan samal"
// str.len();

// let obj1 = {
//     obj2 : {
//         "hello" : "1345"
//     }
// }
// console.log(obj1.obj2.hello)

// let obj = {
//     1: "hello1",
//     2: "hello2"
// }

// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));

// // for(let key in obj){
// //     console.log(obj[key]);
// // }

// for(let i=0; i<Object.keys(obj).length; i++){
//     console.log(obj[Object.keys(obj)[i]]);
// }

// let obj = {
//     obj1:{
//         "obj1.1" : {}
//     },
//     obj2:{
//         "obj2.1" : {},
//         "obj2.2" : {}
//     }
// }

// for(let key in obj){
//     if(typeof(obj[key]) == "object"){
//         for(let key2 in obj[key]){
//             console.log(key2)
//         }
//     }
// }


let obj = {
    "hello1" : {},
    "hello2" : 2
}
let newobj = {...obj}; //deep copy
newobj.hello1["hello1.1"] = "Spandan";

console.log(obj);