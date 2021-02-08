// шифр цезаря смещает что-то на 3 символа
// Task 1 

// class Ceasar{

//     constructor(number) {

//         this.number = number.toString();

//     }

//     encrypt(step = 3){

//        let data = this.number.split("");

//        data.forEach((e,i,arr) => arr[i] = +e + step >= 9 ? ((+e) + step)-10 : +e + step);

//        this.isEncrypted = true;

//        this.step = step;

//        this.number = data.join("");

//        return this;
//     }

//     decrypt(){
        
//       if(this.isEncrypted == true){

//        let data = this.number.split("");

//        data.forEach((e,i,arr)=> arr[i] = +e - this.step >= 0 ? +e - this.step :  (+e) - this.step + 10 );

//        this.isEncrypted = false;

//        this.number = data.join("");

//       }

//       return this;

//     }

// }

// let sample = new Ceasar(123);
// console.log(sample.encrypt());
// console.log(sample.decrypt());