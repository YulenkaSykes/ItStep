//Task 1

    // let start = +prompt("enter numder", "");
    // let finish = +prompt("enter numder A", "");
    // let result = 0;
    // for(start; start <= finish; start++) {
    //     result += start 
        
    // }
    //     alert(result);

    //Tsk 2 

    // let first = +prompt("enter numder", "");
    // let second = +prompt("enter numder A", "");
    // if(first == 0) {
    //     alert(second)
    // } else {
    //     while(second != 0) {
    //         if(first > second) {
    //             first = first - second
    //         } else {
    //             second = second - first
    //         } 
    //     }
    //     alert(first)
    // } 

    //Task 3

    // let number = +prompt("enter numder", "");
    // for(let i = 0; i <= number; i++) {
    //     if(number % i == 0) {
    //         alert(i);
    //     }
    // }

    //Task 4

    // let number = prompt("enter numder", "");
    // alert(number.length);

    //Task 5 
     
    //let number = +prompt("enter number", "").split(' ');
    // let countPlus = 0;
    // let countMinus = 0;
    // let countZero = 0;
    // let countEven = 0;
    // let countNoteven = 0;
    // for(let i = 0; i < 10; i++) {
    //     if(number[1] > 0) {
    //         countPlus++
    //     } else if(number[1] < 0) {
    //         countMinus++
    //     } else if(number[1] == 0) {
    //         countZero++
    //     }
    //     if(number[1] % 2 == 0) {
    //         countEven++
    //     } else if(number[1] % 2 != 0) {
    //         countNoteven++
    //     }
    // }
    // console.log(`
    //     Чисел (> 0): ${countPlus}
    //     Чисел (< 0): ${countMinus}
    //     Чисел (0): ${countZero}
    //     Парные (> 0): ${countEven}
    // `);

    // Task 6

    // function calk (
    //     operations = {
    //       "+": ()=>{
    //         return alert(parseInt(prompt("Enter 1st value")) + parseInt(prompt("Enter 2 value")));
    //       },
  
    //       "-": ()=>{
    //         return alert(parseInt(prompt("Enter 1st value")) - parseInt(prompt("Enter 2 value")));
    //       },
  
    //       "*": ()=>{
    //         return alert(parseInt(prompt("Enter 1st value")) * parseInt(prompt("Enter 2 value")));
    //       },
  
    //       "/": ()=>{
    //         return alert(parseInt(prompt("Enter 1st value")) / parseInt(prompt("Enter 2 value")));
    //       }
    //     }
    //   ){
    //     while(confirm("Want to solve?")){
    //       operations[prompt("Enter [+,-,*,/]")]();
    //     }
    //     return;
    //   } 


    // Task 7

    // function number (
    //     number  = prompt("Enter number"),
    //     steps = prompt("Enter steps"),
    //     array = number.split(""),
    //   ){
    //     array.sort((e,i)=>{
    //       if(i<=steps){
    //         return -1;
    //       }else{
    //         return 1;
    //       }
    //     });
  
    //     return alert(array.join(""));
    //   }


    // Task 8

    // function number(
    //     today = new Date().getDate(),
    //     counter = 1
    //   ){
    //     alert(Today is: ${today});
    //     while(confirm("Want to see next day?")){
    //      let date  = new Date();
    //      date.setDate(today+counter);
    //      alert(Next day is ${date.getDate()});
    //      counter++;
    //     }
    //     return;
    //   }


    // Task 9

    // function number(res = "", counter = 1){
    //     res+=`В консоли есть полная версия таблицы \n`;
    //     for(let i = 2; i<=9; i++){
    //       res +=`___${i}___: \n`;
    //       while(counter<=9){
    //         res+=  `${i} * ${counter} = ${i*counter} \n`;
    //         counter++;
    //       }
    //        counter = 1;
    //     }
    //     console.warn(
    //       `%c ${res}`, 
    //        `background:grey;
    //        color:whitesmoke; 
    //        font-size:30px;
    //        border:2px solid black; 
    //        border-radius:15px;
    //        margin:10px 50px 0px 50px;`
    //     );
        
    //     return alert(res);
    //   }

    //   number();


    // Task 10

    // function number (number = prompt("Enter number"), n = 0, m = 100, array = []){
      
    //     function Check(n,m){
    //       array = [];
    //         for(let i = n; i<=m; i++){
    //           array.push(i);
    //         }
    //         if(array.length == 2 ) {
    //          return  alert(`Ur number is ${number} so go fuck yourself!`);
    //         }
    //         alert(array);
    //         let middle = array[Math.floor(array.length/2)];
             
    //         if(confirm(`number>=${middle}?`)){
    //           Check(middle, m);
    //         }else if(confirm(`number<=${middle}?`)){
    //           Check(n,middle);
    //         }else{
    //          return alert(`Ur number is ${middle} and go fuck yourself!`);
    //         }
            
    //     }
    //     return Check(n,m);
        
    //   }
    //   number();
