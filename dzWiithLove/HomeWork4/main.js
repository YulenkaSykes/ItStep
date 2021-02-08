// Task 1 (яблоко)

// function Task1(){const list  = [
//     {
//       name : "carrot",
//       quantity : 2,
//       isBuy : true
//     },

//     {
//       name : "banana",
//       quantity : 5,
//       isBuy : true
//     },

//     {
//       name : "milk",
//       quantity : 1,
//       isBuy : false
//     },

//     {
//       name : "potato",
//       quantity : 8,
//       isBuy : true
//     }
//   ];
//   function show(arr){
//     return  console.table(arr.sort(e=>e.isBuy));
//   }
//   console.table(show(list));



//   function addItem(arr,name, quantity, isBuy){
//     for(let i of arr){
//       if(i.name == name) {
//         i.quantity+=quantity;
//         return this.show();
//       }
//     }

//     arr.push({
//       name : name,
//       quantity : quantity,
//       isBuy : isBuy
//     });

//     return show(arr);
//   }

//   console.table(addItem(list, "wine", 9, true));

//   function toBuy(arr,name){
//     for(let i of arr){
//       if(i.name == name){ 
//         i.isBuy = true;
//         return show(arr);
//       };

//     }

//     return console.warn(`item, named ${name} is apcent in your list`);
//   }
//   toBuy(list, "banana");
// }




// Task 2

// function Task2(){
//   const list = [
//     {
//       name : "pop-corn",
//       quantity : 2,
//       price : 50
//     },

//     {
//       name : "eggs",
//       quantity : 10,
//       price : 2
//     },

//     {
//       name : "juice",
//       quantity : 2,
//       price : 50
//     },

//     {
//       name : "sweets",
//       quantity : 7,
//       price : 6
//     },

//     {
//       name : "fish",
//       quantity : 9,
//       price : 8
//     }
//   ];

//    function check(arr){
//     let res = {};
//       arr.forEach(e=>{
//          res[e.name]  = e.quantity * e.price

//    });
//    function prediction (){
//     let predictionList = ["если хуй с тобой - это уже лучшее что могло з тобой могло случится!", "переименовать пожелать"]
//     return predictionList[Math.floor(Math.random()* predictionList.length)];
//   }
//   // это второе задание
//        res.total = Object.values(res).reduce((acc,e)=>acc+=e);
// // это 3
//        function mostExpensive(){
//         let prices = [];
//         list.forEach(e=>prices.push(e.quantity * e.price))
//         let max = Math.max.apply(null,prices);
//       console.log(max);
//       res.mostExpensive = {
//         price : max,
//         paidFor : list[prices.indexOf(max)].name
//     }
//    }
       
//        res.prediction = prediction();
//        mostExpensive();
//        console.table(res);
//    }
//    check(list);
   
// }
// Task2();

// Task 3

// function Task3(){
//   const styles = [
//     {"color": "blue"},
//     {"font-size": "150px"},
//     {"font-family": "'Courier New', 'Courier', 'monospace'"},
//     {"font-weight": "bold"},
//   ];

// class P {
//   constructor(obj,text){
//     let p = document.createElement("p");
//     p.textContent = text;
//     obj.forEach(e=>p.style[Object.keys(e)[0]] = Object.values(e)[0]);
//     return document.body.appendChild(p);
//  }
// }
// let sample = new P( styles, "Юлька красивая");
// }
// Task3();

//Task 4
// function Task4(){

//   const list = [
//     {
//       name : "frontend1",
//       sitPlaces : 15,
//       fac : "ComputerSience"
//     },

//     {
//       name : "frontend2",
//       sitPlaces : 20,
//       fac : "ComputerSience"
//     },

//     {
//       name : "managment1",
//       sitPlaces : 10,
//       fac : "Economic"
//     },

//     {
//       name : "frontend3",
//       sitPlaces : 17,
//       fac : "ComputerSience"
//     },

//     {
//       name : "managment2",
//       sitPlaces : 15,
//       fac : "Economic"
//     },

//     {
//       name : "history1",
//       sitPlaces : 20,
//       fac : "History"
//     }

//   ];

//   class Group{            // Это конструктор для группы (см. 3 пункт)
//     constructor(name, students, fac){
//       this.name = name;
//       this.students = students;
//       this.fac = fac;
//     }
//   }

//   let bestGroup = new Group("F-04", 11, "ComputerSience");
//   let someOtherGroup = new Group("D-10", 15, "Economic");

//   function show(fac = null, group = null) {  //Задания 1-3 в одной функции параметрально 
//     console.log("Finded:");
//     if( fac !== null && typeof fac == "string"){

//       return console.table(list.filter(e=>e.fac == fac));
//     }
//     if( group !== null && typeof group == "object"){
//       return console.table(
//         list.filter(e=>e.sitPlaces >= group.students && e.fac == group.fac)
//       );
//     }

//     return console.table(this);
//   }

//   Object.defineProperty(list, "show", {enumerable: false, value: show});

//   list.show("History");
//   list.show(null, bestGroup);
//   list.show(null, someOtherGroup);


//   function sortBy(places = null,name = null){  //Задания 4-5
//     if(places !== null){
//       console.log("Sorted by sitPlaces");
//        let res = [...this];
//       return console.table(res.sort((e1,e2)=> e2.sitPlaces - e1.sitPlaces));
//     }

//     if(name !== null){
//       console.log("Sorted by names");
//        let res = [...this];
//       return console.table(res.sort((e1,e2)=>{
//           return e1.name.toLowerCase() > e2.name.toLowerCase() ? -1 : 1;
//       }));

//     }
//   }

//   Object.defineProperty(list, "sortBy", {enumerable: false, value: sortBy});

//   list.sortBy("places", null);
//   list.sortBy(null,"names");

// }


// console.group("===Task4===");
// Task4();
// console.groupEnd("===Task4===");



