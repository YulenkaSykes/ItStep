// Ну типа задание : 
// 1. Написать конструктор для автомобилей по трем параметрам 
// 2. Написать функцию, возвращающую промис с описанием автомобиля через рандомный промежуток времени
// 3. Вывести общий результат гонки и победителя

const results = [];

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = Math.floor(Math.random() * 500);
    results.push(this);
  }

  initTime() {
    this.time = 5000 + Math.floor(Math.random() * 10000) - this.speed * 10;

    return new Promise((res) => {
      setTimeout(() => {
        console.log(`
          Car ${this.brand} ${this.model} finished in ${this.time} with speed ${this.speed}
          `);

        res();
      }, this.time);
    });
  }
}

const racers = [
  new Car("Ford", "Mustang GT").initTime(),
  new Car("Ferrari", "903").initTime(),
  new Car("Merswdess", "GLE").initTime(),
  new Car("Mazda", "RX-8").initTime(),
  new Car("BMW", "M3").initTime(),
];

Promise.all(racers).then(() => {
  console.table(results.sort((e1, e2) => e1.time - e2.time));
  console.log(`Winner is ${results[0].brand} ${results[0].model}`);
});
