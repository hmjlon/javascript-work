// 1)명시적 형변환

let age = 22;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
// 2)암묵적 형변환
let test = age + ''; 
console.log(typeof test, test);

//정리
//숫자를 문자로 바꿀 때 : toString()
//문자를 숫자로 바꿀 때 : perseIInt(), perseFloat()
let number = (123.99).toString;
console.log(typeof parseFloat(number),parseInt('123.99'));
//NaN : Not a Number


let num = 123.998;
console.log('num =' +num);
console.log(`num = ${num}`);
