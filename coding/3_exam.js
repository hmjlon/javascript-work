let fs = require('fs');

let input = fs.readFileSync('./data/3_exam.txt')
           .toString().split('\n');

input = input[0].split(' ').map(Number);
console.log(input);
let result;
if(input >= 90){
result = "A";
}else if (input >= 80) {
  result = "B";

};
console.log;