class Calk {
    constructor(a,b){
        this.a = a;
        this.b = b;

        this.res={
            "+": a + b,
            "-": a - b,
            "/": a / b,
            "*": a * b,
        }
    }
    show(){
        console.table(this.res);
    }
}

module.exports = Calk