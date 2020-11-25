const foo = 1
let bar = 2

class Humnan {
    constructor(name) {
        this.name = name;
    }
    say(){
        console.log(`Hello, My name is ${this.name}.`);
    }
}
const Taro = new Humnan('Taro')
Taro.say()