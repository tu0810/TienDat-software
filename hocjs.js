/// Number
var a1 = -100;
var a2 = 0.5;

//String
var str='Heloo world.';
var str2="Heloo world.";
console.log(str2);
var str3 ='Hello, I\'m Tu';

//escape a character

//Boolean (true,false);
var isHidden = false;
console.log(isHidden);
var isMale = true;
console.log(isMale);

// let n=1;

// // undefined
// var a;
// a=100;
// console.log(a);


// // null
// a = null
// console.log(a);

//khai báo biến
// var a = 2;
// var b= 5;
// var c = a*b;
// console.log(c);

//  kiểu dữ liệu
//  primitive types:
//   - Number
//   - String
//   - Boolean
//  Special types:
//   -undefined  
//   - null
//  Reference types:
//   - Array
//   - Object




// Object
// var a = {
//   key: value

// gồm 2 thành phần
//  1--thuôc tính
//  2-- phương thức(các hàm )
// }
var myDog = {
  name: 'Lon',
  weight:5.2,
  isAlive: false
};
//tách thuộc tính của object thì dùng dấm '.'
myDog.weight = 10;
// myDog.isAlive = true;
myDog['isAlive']= true;
console.log(myDog);
console.log(myDog.name);
// console.log(myDog['name']);
var myBestFriend = {
  nickName:'Cho',
  age:22,
  gender:'male'
};

// var a = {};

// Array dùng để lưu trữ list phần tử giống nhau

var dog1 = {
  name: 'duc',
  type: ' cho ta'
};
var dog2 = {
  name:'co',
  type:'lap xuong'
};
var dog3 = {
  name: ' Dan',
  type:'husky'
};
var bunchOfDogs=[dog1,dog2,dog3];
console.log(bunchOfDogs);
console.log(bunchOfDogs[2].name);

// gan bien
var dog4={
  type:'shiba'
};
bunchOfDogs[0] = dog4;
console.log(bunchOfDogs);


// ví dụ điện thoại -> Contacts
var Contacts = [
  {name:'Hữu', phone:'0987654321'},
  {name:'Long', phone:'0123456789'}
];
console.log(Contacts);

var sv1={
  name:'tiến',
  age:22,
  sdt:'0987654321'
};
var sv2={
  name:' đạt',
  age:22,
  sdt:'0124654712'
};
var sv3 ={
  name:'Hiếu',
  age:22,
  sdt:'015379381'
};
var listStudent = [sv1,sv2,sv3];
console.log(listStudent);
console.log(listStudent[1].sdt);




 // các phép toán trong lập trình
//   1. ++ --
//   2. * / %
//   3. + -

// 2 * 9 % 4;
// 4 - 6 / 3 % 2;

let a =5;

let b = 10;
// --b;

// a++ + ++a - --a + a--;
a++ * b-- + --a * ++b;
//5 * 10 + --a * ++b //6 9
//5* 10 + 5 * 5*10

 //phép gán
//4. = += -= *= /=
// > >= <= === !==(bài khác: == !=)
let a = 5;
let b = 8;
a = a + b *5;


//function
function dienTichTamGiac(a,h){
  return a*h/2;
}

// tính diện tích tam giác có h=5, a=10
dienTichTamGiac(10,5);


 /// tính diện tích hình tròn bán kính r =10
 // s = r*r*3.14;
 function dienTichHinhTron(r){
   return r*r*3.14;
 }
 dienTichHinhTron(10);

// tính diện tích hình vuông
function dienTichHinhVuong(a){
  return a*a;
}
dienTichHinhVuong(5);
function dienTichHinhChuNhat(a,b){
  return a*b;
}
dienTichHinhChuNhat(5,7);


// Object methods
// các phương thức của object

let myDog = {
  weight: 5,
  name:'Đần',
  age: 1,
  bark: function() { 
    // anonymous function
  console.log('Meo meo, my name is', this.name);//undefined
  },
  eat: function(bone){
    this.weight = this.weight + bone.weight;
    return this;
  },
  songThem: function(tuoi){
    this.age= this.age+ tuoi.age;
    return this;
  }
};

let bone = { weight:0.5};
console.log('before eating', myDog.weight);
myDog.eat(bone);
console.log('after eating',myDog.weight);
myDog.bark();

let tuoi = { age: 3};
console.log('before',myDog.age);
myDog.songThem(tuoi);
console.log('after',myDog.age);
// function bark() {
//   console.log('Meo meo, my name is', this.name);
// }

// bark();

//for
// foreach
//bài toán hiển thị ra màn hình từ 0->9
for(let i=0;i<10;i++){
  console.log(i);
  }
  console.log('=============');
  for(let i = 9;i>=0;i--){
    console.log(i);
  }
  
  console.log('=============');
  
  let employees=[
    {name:'Tú',age:22},
    {name:'Tùng',age:23},
    {name:'Tụ',age:24}
  
  ];
  
  //hiển thị tên nhân viên
  for (i=0;i<3;i++){
  console.log(employees[i].name,employees[i].age)
  }
  console.log('=============');
  
  //other for loops
  //1. for .. of
  //2. for ... in
  
  let content = '';
  for(let employee of employees){
  console.log(employee);
  }
  
  let myDog = {
    name:'Đần',
    age:1,
    weight:5
  };
  for(let key in myDog){
    console.log(key,myDog[key]);
  }

  // array method
// -a.concat(b)
// -a.push(b)
// - a.pop(b)
// - a.shift(b)
// - a.unshift(b)
// - a.slice
// - a.splice 0 1
let a = [, 3, 2];
let b = [10, 20];
let c= 5;

//concat là nối mảng
let x = a.concat(b);
console.log(x);

//push trả về độ dài mới của a và thay đổi a
a.push(c); // length
a;

//pop đẩy ra phần tử cuối và trả về phần tử bị đẩy ra
// a.pop();
// a;

//shift đẩy ra phần tử đầu tiên của mảng và trả về phần tử bị đẩy ra
// a.shift();
// a;

//unshift đẩy vào phần tử đầu tiên của mảng và trả về độ dài mới của mảng
// a.unshift(5);//length
// a;

// dùng function như tham số
// let coffMachine={
//   makeCoffee:function(onFinish){
//     console.log('Making Coffee...')
//     onFinish();
//   }
// };

// let beep=function(){
//   console.log('Tít tít');
// };

// function bep(){
//   console.log('Tịt tịt');
// };

// coffMachine.makeCoffee(beep);
// coffMachine.makeCoffee(bep);

// coffMachine.makeCoffee(function(){
//   console.log('Bíp Bíp');
// });


////array mothods
////concat,push, pop,shirt,unshirt
////////map method
let numbers=[1, 2, 3, 4];
let squareNumbers= numbers.map(function(x) {
  return x*x;
});

let rectangles=[
  {width:10,height:5},
  {width:10,height:20},
  {width:4,height:16}
]
console.log(rectangles);
// console.log(rectangles().height);

let dienTichHCN=rectangles.map(function(x){

return x.width*x.height;
});
dienTichHCN;

////////// array.filter

let numbers=[1, 2, 3, 4, -1];
let eveNumber = numbers.filter(function(item){
  return item % 2 === 0;
});
console.log(eveNumber);

let kChiaHet = numbers.filter(function(item){
  return item %2 != 0;
});
console.log(kChiaHet);

////// array.find
let numbers=[1, 2, 3, 4, -1];
let eveNumber = numbers.find(function(number){
  return number % 2 === 0;
});
console.log(eveNumber);

/////// array.reduce
let numbers=[1, 2, 3, 4, -1];
numbers.reduce(function(a,b){
  console.log(a,b);
  return a+b;
})
console.log('============');
console.log('============');
console.log('============');

let orders = [
  { name: 'A', quantity: 2, unitPrice: 100},
   { name: 'B', quantity: 1, unitPrice: 400},
    { name: 'C', quantity: 5, unitPrice: 500},
];

let tongDonHang = orders.reduce(function(a,b){
  // console.log(a,b);

  return a +b.quantity*b.unitPrice;;
},0);
console.log(tongDonHang);
console.log('============');

let products = [
  { name: 'A',unitPrice: 100, quantity: 10, category: 'Electronic goods'},
   { name: 'B',unitPrice: 10, quantity: 15, category: 'Electronic '},
    { name: 'C',unitPrice: 50, quantity: 20, category: 'Electronic goods'}
]
////1. filter các sản phẩm nằm trong 1 category nào đó
/////2. tính số tiền hàng còn trong kho
/////3. chọn ra các sp có số tiền lớn
let timSP=products.filter(function(x){
  return x.category === 'Electronic goods';
});
console.log(timSP);

let chonSP=products.filter(function(x){
return x.unitPrice*x.quantity >= 1000;
});
console.log(chonSP);
console.log('============');

let sum1 = products.reduce(function(a,b){
  // console.log(a,b);

return a + b.unitPrice*b.quantity;
},0);
console.log(sum1);
console.log('============');

let numbers=[1, 2, 3, 4, -1];
let sum = numbers.reduce(function(a,b){
  console.log(a,b);
  return a+b;
},0);
console.log(sum);
let items = ['tom','bill','kim'];
let ten = items.reduce(function(a,b){
console.log('<'+ b +'>');

  return a + b;
});
console.log('<'+ ten +'>');

////array short
let numbers = [2, 9, 3, 4 ,1];
let ascendingNumbers = numbers.sort(function(a,b){
  return a-b;
});
console.log(ascendingNumbers);
let descendingNumbers = numbers.sort(function(a,b){
  return b-a;
});
console.log(descendingNumbers);

let employees = [
  {name: 'Ti', age:18},
  {name: 'Teo', age:20},
  {name: 'Tu', age:19}
];
let sxTuoi = employees.sort(function(a,b){
  return a.age -b.age;
});
console.log(sxTuoi);

let orders = [
  { name: 'A', quantity: 2, unitPrice: 100},
   { name: 'B', quantity: 1, unitPrice: 400},
    { name: 'C', quantity: 5, unitPrice: 500},
];
let sxTheoGia = orders.sort(function(a,b){
  return b.unitPrice - a.unitPrice; 
});
console.log(sxTheoGia);
console.log('================');

let sxTonKho = orders.sort(function(a,b){
  return a.quantity - b.quantity; 
});
console.log(sxTonKho);


/// math object
function discArea(r){
  return r*r* Math.PI;
}

let s = discArea(5);
console.log(Math.PI);

//làm tròn lên
console.log(Math.ceil(9.2));

////làm tròn xuống
console.log(Math.floor(9.2));

console.log(Math.max(10, 20, -1));///20

console.log(Math.min(10, 20, -1));///-1

///random từ 0->1
console.log('Random:', Math.random());
function tossACoin(){
  let random = Math.random();
  console.log(random);
  return random > 0.5;
}

console.log('Sap:', tossACoin());



/// new keyword
// let today = new Date();
// console.log(today);
//Create a new object
let mouse = {
  weight: 0.2,
  getWeight: function(){
    return this.weight;
  }
};
// console.log(mouse.getWeight());

//constructor  function
function Mouse(color,weight){
  this.type = 'mouse';
  this.color = color;
  this.weight = weight;
}

let mouse1 = new Mouse('white','0.2');
let mouse2 = new Mouse('black','0.5');
console.log(mouse1);
console.log(mouse2);


let tom = {
  name: "tom",
  stomach:1,
  eat: function(mouse){
    this.stomach.push(mouse);
    return this;
  }
};

function Chuot(name) {
  this.name = name;
}

let m1 = new Chuot('1');
let m2 = new Chuot('2');
let m3 = new Chuot('3');

tom.eat(m1).eat(m2).eat(m3);
console.log('Tom');
console.log(tom);



/// new keyword
// let today = new Date();
// console.log(today);
//Create a new object
let mouse = {
  weight: 0.2,
  getWeight: function(){
    return this.weight;
  }
};
// console.log(mouse.getWeight());

//constructor  function
function Mouse(color,weight){
  this.type = 'mouse';
  this.color = color;
  this.weight = weight;
  // this.sleep = function() {
  //   console.log('Sleeping....');
  // };
}


Mouse.prototype.sleep= function(){
  console.log('Sleeping......');
};

let jerry = new Mouse('white',20);

let mickey = new Mouse('red',10);

console.log(jerry.sleep === mickey.sleep);

// best practice


