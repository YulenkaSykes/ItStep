// Task 1

// const module = [

//     (y = parseInt(prompt("Enter year")))=>{
//         return alert(y % 4 == 0 && y % 100 !== 0);
//     }


// Task 2

//     (a = +prompt("a"), b = +prompt("b"))=> alert(a*b)


// Task 3

//     (m = +prompt("Enter mouth")) => {
//         const seasons = {
//             winter : [12, 1, 2],
//             sping : [3, 4, 5],
//             summer : [6, 7, 8],
//             autmn : [9, 10, 11]
//         } 

        
//        for(let i in seasons){
//          seasons[i].join("") == Object.values(seasons).find(e=>e.includes(m)).join("") ? alert(i) : true;
//        }
        
//     }


// Task 4

//     (years = +prompt("Enter years"),sum = +prompt("Enter value of the money"))=>{
//         for(let i = 0; i<= years; i++){
//           sum+=sum*0.1;
//         }
//         return alert(sum.toFixed(2));
//     }


// Task 5

//     (num = +prompt("Enter number"))=>{
//         for(let i = 2; i < num; i++)
//           if(num % i === 0) return alert(false);
//         return alert(num > 1);
//     }


// Task 6

//     (
//         date = new Date(),
//         day = +prompt("Enter day"),
//         month = +prompt("Enter month"),
//         year = +prompt("Enter year")
//       )=>{
        
//         date.setDate(day);
//         date.setMonth(month);
//         date.setFullYear(year);

//         return alert(date.getDate()==day);
//     }

// ]

// console.log(module[module.length-1]());