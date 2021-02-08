// Task 1

// function same(){ 

//   let allArrays = [...arguments].filter(e=>e instanceof Array).sort((e1,e2)=>e2.length-e1. length);
//   let biggest = allArrays.shift();
 
//   return Array.from(new Set(biggest.filter((e)=>allArrays.every(elem => elem.includes(e)))));
         
// }

// console.log(same([1,2,3,4,5], [1,2,3,55,2,1], [1,2,3], [0,0,1])); //Любое кол-ство выборок

// console.log(same(["apple", "banana", "pear"], ["apple", "pineapple"], ["banana","apple"]));


// //Task2

// function diff(){

//   let allArrays = [...arguments].filter(e=>e instanceof Array);
//   let res = [];

//   allArrays.forEach(arr=>{
//     arr.forEach(e=>res.push(e));
//   });

//   return Array.from(new Set(res.filter((e)=>!allArrays.every(elem => elem.includes(e)))));
// }

// console.log(diff([1,2,3,45],[11,23,1]));

// let arr = [1,2,3,42,2,4,3,1, "g"];
// let a = arr.some(e=>typeof e  == "string");
// console.log(a);

// mersedess1 instanceof Mersedess
// экземпляр мерседес1 являеться мерседес

// some что-то
// every каждый