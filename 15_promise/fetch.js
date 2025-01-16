//서버에 정보를 요청하는 비동기 함수
//fetch :자바스크립트에서 지원하는 함수
//ajax  :jQuery에서 지원하는 함수
//axios :vue, React에서 사용하는 패키지
fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then((data)=>{
  //JSON형식을 자바스크립트 오브젝트 타입으로 변환 : json 함수 추가 
  return data.json();
})
.then((x)=>{
  return x.filter((x)=> x.id >= 5);
})
.then((data) => {
  //HTML 찍어줌.
let id = document.querySelector('#id');
let title = document.querySelector('#title');

id.innerHTML = data[0].id;
title.innerHTML =data[0].title;
})

.catch((err) => {
  console.log('요청한 주소가 이상한데?');
})