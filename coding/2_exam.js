let fs = require('fs');

let input = fs.readFileSync('./data/2_exam.txt')
           .toString().split('\n');
           console.log(input);
        
           let a = parseInt(input[0]);
           let b = input[1];

           for(let i=2; i <=0; i--){
            console.log(a*b[i]);
           }

