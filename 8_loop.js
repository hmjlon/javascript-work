/*//  1.구구단 출력
for(let i = 2 ; i<=9; i++) { //2 3
  for (let j =1; j<=9; j++){ //1~9
    console.log(`${i} * ${j} =` + i * j ); 
  }
}

// 2. 별찍기 
/**
 *    #
 *   ###
 *  #####
 * #######
 */
// 배열 선언하고 초기화 실행
let star = new Array(7).fill(' ');

let mid = 3;

star[mid] = '*';
// 출력
// 배열을 문자열로 변화
let starPrint = star.join('');
console.log(starPrint);
for(let i=1 ; i<= mid; i++){
  star[mid] = '*';
  for(let j=1;j<=i;j++){
    star[mid +j] = '*';
    star[mid -j] = '*';
  }
  starPrint = star.join('');
  console.log(starPrint);
}



