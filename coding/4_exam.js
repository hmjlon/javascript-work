let fs = require('fs');

let input = fs.readFileSync('./data/4_exam.txt')
           .toString().split('\n');
num =parseInt(input[0]);
data =input[1].split(' ').map(Number);
console.log(num);
console.log(data);

let min = 9999999999;
let max = 0;

for(let i=0; i<num; i++){
  if(max < data[i])max = data[i];
  if(min > data[i])min = data[i];

}
console.log(min + ' ' + max);
min = data.reduce((x,y)=> Math.mmin(x,y));
max = data.reduce((x,y)=> Math.max(x,y));
console.log(min + ' ' + max);