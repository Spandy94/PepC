// let str = "Bhavesh Bansal";
// let ans = "";

// for(let i = 0; i < str.length; i++) {
//     ans += str[i] + ", ";
// }

// console.log(ans);


// let str = "Bhavesh Bansal";

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
// }

// let str="jfuijihdfbbsdfsdfvsdfhvsbfsdfsdhfb";
// let count = 0;

// for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) == 'b') {
//         count++;
//     }
// }

// console.log(count);

// let number = "12";
// console.log(parseInt(number));
// let str = "23456";
// let ans = 0;

// for(let i = 0; i < str.length; i+=2) {
//     console.log(str.substr(i,2));
//     ans += parseInt(str.substr(i,2));
// }
// console.log(ans);
// let str = "1A2";
// let ans = 0;
// for(let i = 0; i < str.length; i++) {
//     if(!isNaN(str[i])) {
//         ans += parseInt(str[i]);
//     } else {
//         ans += str.charCodeAt(i);
//     }
// }
// console.log(ans);

let str = "Bhavesh Bansal";
let ans = "";
for(let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
}
console.log(ans);



