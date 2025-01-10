let fs = require('fs');

let input = fs.readFileSync('./data/문제1_A+B.txt')
           .toString().split('\n');

input = input[0].split(' ').map(Number);
console.log(input[0] + input[1]);