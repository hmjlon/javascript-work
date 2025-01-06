const 하이브 = [
  [
    {
      grpuoName: '뉴진스',
      name: '하니',
      position: '센터',
      age: 21,
    },
    {
      grpuoName: '뉴진스',
      name: '안유진',
      position: '보컬',
      age: 22,
    },
    {
      grpuoName: '뉴진스',
      name: '이서',
      position: '래퍼',
      age: 23,
    },
  ],
  [
    {
      grpuoName: '아일릿',
      name: '민주',
      position: '센터',
      age: 31,
    },
    {
      grpuoName: '아일릿',
      name: '윤아',
      position: '보컬',
      age: 32,
    }
  ]
]


// 아일릿의 민주의 이름, 나이를 출력합니다.

console.log(하이브[1][0].grpuoName);


let groupName =하이브[1][0].grpuoName;
let idolName = 하이브[1][0].idolName;
let age = 하이브[1][0].age;
console.log(`
  -그룹명 : ${groupName}
  -이름 : ${idolName}
  -나이 : ${age}
  `)

//Loop 돌리기 
for(let i=0; i<하이브.length; i++){
  console.log(하이브[i]);
}
