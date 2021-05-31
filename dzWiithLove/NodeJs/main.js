const Calk = require("./lib")

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter two numbers", (a) => {
    const numbers = a.split(" ");
    let nhumb = new Calk(+numbers[0], +numbers[1]);
    nhumb.show();
})