// Task 1 (я подсяду)

// class Drob {

//     constructor(ch,zn) {
//         this.ch = ch;
//         this.zn = zn;
//     }

//     sum(d1,d2){
//         return new Drob( d1.ch  * d2.zn  + d2.ch * d1.zn , d1.zn * d2.zn );
//     }

//     min(d1,d2){
//         return new Drob( d1.ch  * d2.zn  - d2.ch * d1.zn , d1.zn * d2.zn );
//      }

//      pow(d1,d2){
//         return new Drob( d1.ch * d2.ch, d1.zn * d2.zn);
//     }

//     div(d1,d2){
//         return new Drob ( d1.ch *  d2.zn, d1.zn * d2.ch);
//     }

//     calc(){
//         let ch, zn;
//         for (let  i = 2; i <= this.ch; i++) {
//            if (this.ch % i === 0 &&  this.zn % i === 0){
//                ch = this.ch / i, zn = this.zn / i;
//            }
//         }
//         return new Drob(ch, zn);
//       }
    
// }

// let drob1 = new Drob(1,5);
// let drob2 = new Drob(3,10);

// console.log(drob1.sum(drob1, drob2));
// console.log(drob1.min(drob1, drob2));
// console.log(drob1.pow(drob1, drob2));
// console.log(drob1.div(drob1, drob2));
// console.log( new Drob(10,15).calc()) ;



//Task 2

// class Clock {
//     constructor(sec,min,hrs){  
//       this.sec = sec;
//       this.min = min;
//       this.hrs = hrs;
  
//       this.fixer();
//     }
  
//     show(){
//       return console.table(this);
//     }
  
//     fixer(){
  
      
//       if(this.hrs < 0) {
//         this.min -= -1* +(this.hrs*60).toFixed(0);
//         this.hrs = 0;
//       }
  
//       if(this.min < 0) {
//         if(this.hrs > 0) {
//           this.hrs -= +(this.min/60).toFixed(0)>0 ? +(this.min/60).toFixed(0) : 1;
//           this.min = 60 + this.min;
//         } else {
//           this.sec -= -1* +(this.min*60).toFixed(0);
//           this.min = 0;
//         }
//       }
  
//       if(this.sec < 0) {
//         if(this.min > 0) {
//           this.min -= +(this.sec/60).toFixed(0)>0 ? +(this.sec/60).toFixed(0) : 1;
//           this.sec = 60 + this.sec;
//         } else {
//           this.sec;
//         }
//       }
    
//       if(this.sec >= 60) {
//         this.min += +(this.sec/60).toFixed(0);
//         this.sec = this.sec % 60; 
//       }
  
//       if(this.min >= 60) {
//         this.hrs += +(this.min/60).toFixed(0);
//         this.min = this.min % 60; 
//       }
      
//     }
  
//     changeSeconds(n){
//       this.sec += n;
//       this.fixer();
//     };
  
//     changeMins(n){
//       this.min += n;
//       this.fixer();
//     };
  
//     changeHours(n){
//       this.hrs += n;
//       this.fixer();
//     }
//   }
  
//   let sample = new Clock(70,20,1);
//   sample.show();
//   sample.changeSeconds(30);
//   sample.show();
//   sample.changeHours(10);
//   sample.show();
//   sample.changeMins(-20);
//   sample.show();
//   sample.changeMins(-2);
//   sample.show();
//   sample.changeSeconds(-50);
//   sample.show();
//   sample.changeHours(-100);
//   sample.show();