//산술연산자
console.log(10 + 10);
console.log(7 % 3);

// 증감연산자
console.log("===증감연산자");
let number = 1;
number ++;
console.log(number);

// 간단 타입 변환
console.log("===간단 타입 변환");
let sample = '99';
console.log(typeof sample);
console.log(+sample);
console.log(typeof +sample);

// 비교 연산자
console.log("== 비교연산자 : 값만 비교");
console.log( 3 == 3);
console.log( 3 == '3');

console.log("=== 비교연산자");
console.log("값과 타입을 같이 비교");
console.log( 3 === 3);
console.log( 3 === '3');

// 삼항연산자
console.log(10 > 0 ? '10은 0보다 크다.' : '그렇지 않다.');

// 논리연산자( and : &&, or : ||)

// 단축평가 - 많이 씀...
console.log('-------------------');
console.log(true || '아이브');
console.log(false || '아이브');

console.log('-------------------');
console.log(false && '뉴진스');
console.log(true && '뉴진스');

console.log(true && true && '아일릿');
console.log(true && false && '아일릿');


console.log('-------------------');
const a =1;// 상수
let name; // 변수


console.log(name);

name = name ?? '김형민';
console.log(name);

name = '김형민' && '아이브'; // true인지 판단 
console.log(name);

// 스크립트에서 false로 보는 것 
// false , null , 0 , undefinedd ,''










