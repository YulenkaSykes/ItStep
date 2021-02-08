// палидром взад вперед одно тоже
// join превращает массив в строку
// split строку в массив

// function palindrom(str){
//     // return str === str.split().reverse().join(); много методов

//  }
// Task 1

//  let palindrom = (str) =>  str === str.split("").reverse().join("");
//  console.log(palindrom("дед"));

// Task 2

// function numberParser(str){
//     let sum =  0;
//      str.split("").forEach(el => !isNaN(parseInt(el))  ? sum += parseInt(el) : el);
//     return sum;
//   } 
  
//   console.log("Sum is:",numberParser("$123"));


// Task 3

// function zeros (num , len , zn) {

//    let array = num.toString().split("");

//     for(let i = 0; i <= len -  array.length; i++){
//        array.unshift("0");
//     }

//     zn ? array.unshift(zn) : true;

//     let res =  array.join("");

//     return console.log(res);

// }

// zeros(145, 5, "-");


// Task 4

// function comparasion (str1, str2){
//    return console.log(str1.toLowerCase() === str2.toLowerCase());
// } 

// comparasion("Yulka-Kozylka", "YuLKa-Kozylka");