// Task 1

// const inputs = document.querySelectorAll("input");

// const selection = document.querySelector("select");

// const p = document.querySelector("p");

// for(let i = 1; i <= 20; i++){
//     let opt = document.createElement("option");
//     opt.value = i;
//     opt.textContent = i;
//     selection.appendChild(opt);
// }

// [...document.body.children].forEach(e=>e.addEventListener("change", function(){
//     p.textContent = `${(parseInt(inputs[0].value) * parseInt(inputs[1].value) * parseInt(selection.value)) / 100}`;
// }));

// __proto__ не задавать вручную

// function Task1(){
//     console.group("Task 1")
 
//      class Head{
//          constructor(glasses){
//             this.glasses = glasses;
//          }
//      }
 
//      class Table extends Head{
//          constructor(glasses,pen){
//              super(glasses);
//              this.pen = pen;
//          }
//      }
 
//      class Bed extends Table{
//          constructor(glasses,pen,sheet, pillow){
//              super(glasses,pen);
//              this.sheet = sheet;
//              this.pillow = pillow;
//          }
//      }
 
//      class Pockets extends Bed{
//          constructor(glasses,pen,sheet,pillow,money){
//              super(glasses,pen,sheet,pillow);
//              this.money = money;
//          }
//      }
 
//      const bed = new Bed(1,3,1,2);
//      const pockets = new Pockets(1,3,1,2,2000);
     
//      console.log(pockets.glasses);
//      console.log(bed.glasses);
 
//      console.groupCollapsed("__");
//  }
 
//  Task1();