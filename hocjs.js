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










