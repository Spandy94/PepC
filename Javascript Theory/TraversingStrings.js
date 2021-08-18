// let str = "Spandan Samal"
// let ans = ""; //empty string

// for (let i=0 ; i<str.length; i++){
//     console.log(str[i]);
// } 

// for (let i=0 ; i<str.length; i++){
//     console.log(str.charCodeAt(i)); //every ASCII value
// } 

// for (let i=0 ; i<str.length; i++){
//     ans += str[i] + ", ";
// } 
// console.log(ans);


// let str = "uhsaudgsavachjsacbjkdssbvjkbdfjvjbsjibvijibdouvbeubvuo";
// let count = 0;

// for(let i=0 ; i<str.length ; i++){
//     if(str.charAt(i) == 'b'){
//         count++;
//     }
// }
// console.log(count);

// let number = "12";
// console.log(parseInt(number));

// let str = "837843797589427";

// let ans = 0;

// for(let i=0 ; i<str.length; i++){
//     ans += parseInt(str[i]);
// }
// console.log(ans);

// let str = "1A2";
// let ans = 0;

// for(let i=0; i<str.length ; i++){
//     if(str.charCode(i) >= 48 && str.charCode(i) <= 57){
//         ans += parseInt(str[i]);
//     }else{
//         ans += str.charCodeAt(i);
//     }
// }
// console.log(ans);

// let str = "Spandan Samal";
// let ans = "";
// console.log(str.split('').reverse().join('')); //reverse strings by letters
// for(let i=str.length -1 ; i>=0 ; i--){
//     ans += str[i];
// }
// console.log(ans);

//reverse strings by words
// let str = "Spandan Samal";
// let reverse = "";
// for(let i=reverse.length -1 ; i>=0 ; i--){
//     reverse += str[i];
// }
// let sp = undefined;
// let ep = reverse.length;
// let ans = "";
// for(let i = reverse.length-1 ; i>=0 ; i--){
//     if(reverse[i] == " "){
//         sp = i+1 ; 
//         ans += reverse.substring(sp,ep) + " ";
//         ep = i;
//         sp = undefined;
//     }else if(i == 0){
//         sp = 0;
//         ans = reverse.substring(sp,ep);
//     }
// }
// console.log(reverse);


//check for Palindrome

