var Mouse = require('./mouse');
var Cat = require('./cat');

console.log('Coders.HaNoi');

// node module

let mickey = new Mouse('black');
let jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

let tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);

