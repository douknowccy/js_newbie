//寫註釋方法
// 或 
/** 這樣
*/

//js 最基本輸出打印信息方法
console.log('hello');


//游覽器自帶呼叫警告方法
//嘗試改寫輸出信息
alert('hello this is falco');

// How to write a comment inline

// 定義變量 const ,let ,var  
// const 定義後 基本數據類型無法更新 let 可以更新  
// ,var 先不管 以後再說(scope的關係)


// 數據類型 (其餘可先不管)
/**
 * 基本数据类型（原始值）：
Number（数值，包含NaN）
String（字符串）
Boolean（布尔值）
Undefined（未定义/未初始化）
Null（空对象）
 */

//字符串
const b = 'smoothie';
console.log(b);
//數字
const someNumber = 45;
console.log(someNumber);


// Numbers in Javascript
let num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
// 餘數
console.log(num1 % 6);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
方法 
1.建立方法
2.調用方法
*/

// Create
function fun() {
    console.log('this is a function');
}

// Call
fun();

//傳參
function greeting(yourName) {
    const result = 'Hello' + ' ' + yourName; // String Concatenation
    console.log(result);
}


//把下列解除註釋會看到調用方法
// const name = prompt('你叫甚麼名');
// greeting(name);







// How do arguments work in functions?
// How do we add 2 numbers together in a function?

// function sumNumbers(num1, num2) {
//     const result = num1 + num2;
//     console.log(result);
// }

// sumNumbers(10, 10);

/* While loops

const num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

// */

// // For loop
// for (let num = 0; num <= 100; num++) {
//     console.log(num);
// }

// // Data types
// let yourAge = 18;                               // number
// let yourName = 'Bob';                           // string
// let name = { first: 'Jane', last: 'Doe' };        // object
// let truth = false;                              // boolean
// let groceries = ['apple', 'banana', 'oranges']; // array
// let random;                                     // undefined
// let nothing = null;                             // value null

// // Strings in Javascript (common methods)
// let fruit = 'banana,apple,orange,blackberry';
// let moreFruits = 'banana\napple';               // new line

// console.log(fruit.length);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(2, 6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(',')); // split by a comma
// console.log(fruit.split('')); // split by characters

// // Array
// let fruits = ['banana', 'apple', 'orange', 'pineapples'];
// fruits = new Array('banana', 'apple', 'orange', 'pineapples');

// console.log(fruits[2]);  // access value at index 2nd

// fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // array common methods
// console.log('to string', fruits.toString());
// console.log(fruits.join(' * '));
// console.log(fruits.pop(), fruits);  // removes last item
// console.log(fruits.push('blackberries'), fruits); // appends
// console.log(fruits[4]);
// fruits[fruits.length] = 'new fruit'; // same as push
// console.log(fruits)
// fruits.shift();  // remove first element from an array
// console.log(fruits)
// fruits.unshift('kiwi');  // add first element to an array
// console.log(fruits)

// let vegetables = ['asparagus', 'tomato', 'broccoli'];
// let allGroceries = fruits.concat(vegetables);  // combine arrays
// console.log(allGroceries);
// console.log(allGroceries.slice(1, 4));
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());

// let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// console.log(someNumbers.sort(function (a, b) { return a - b })); // sorted in ascending order
// console.log(someNumbers.sort(function (a, b) { return b - a })); // sorted in descending order

// let emptyArray = new Array();
// for (let num = 0; num <= 10; num++) {
//     emptyArray.push(num);
// }
// console.log(emptyArray);

// // Objects in Javascript
// // dictionaries in Python

// let student = {
//     first: 'Rafeh', 
//     last: 'Qazi', 
//     age:25, 
//     height:170,
//     studentInfo: function (){
//         return this.first + '\n' + this.last + '\n' + this.age;
//     }
// };

// // console.log(student.first);
// // console.log(student.last);
// // student.first = 'notRafeh';  // change value
// // console.log(student.first);
// student.age++;
// console.log(student.age);

// console.log(student.studentInfo());

// // Conditionals, Control flows (if else)
// // 18-35 is my target demographic
// // && AND
// // || OR
// const age = 45;

// if ( (age >= 18) && (age <= 35) ) {
//     status = 'target demo';
//     console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);
// }

// // Switch statements
// // differentiate between weekday vs. weekend
// // day 0 --> Sunday --> weekend
// // day 1 --> Monday --> weekday
// // day 2 --> Tuesday
// // day 3 --> Wednesday
// // day 4 --> Thursday --> weekday
// // day 5 --> Friday --> weekend
// // day 6 --> Saturday --> weekend
// switch (2) {
//     case 0:
//         text = 'weekend';
//         break;
//     case 5:
//         text = 'weekend';
//         break;
//     case 6:
//         text = 'weekend';
//         break;
//     default:
//         text = 'weekday';
// }

// console.log(text);