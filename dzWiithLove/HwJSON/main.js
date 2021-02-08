// Task 1

// function Json(obj){

//     let res = {
//     values : [],
//     keys : []
//     }

//     for(let i in obj){
//     res.keys.push(i);
//     res.values.push(obj[i])
//     }

//     return JSON.stringify(res);

//     }

//     alert(Json({name : "Mark Tven", age : 56 }));

// Task 2
// let user = {
//     name: 'Vasya',
//     surname: 'Mishak',
//     age: 20,
//     isMale: true,
//     params: {
//         height: 175,
//         width: 160,
//         weight: 220
//     }
// };

// function flatMap(obj){
//     for(let key in obj){
//         if (typeof user[key] == "object") {
//         for(let i in obj[key]){
//             obj[i] = obj[key][i];
//         }
//     delete obj[key];
// }
// }

// return console.log(JSON.stringify(obj));

// }

// flatMap(user);








