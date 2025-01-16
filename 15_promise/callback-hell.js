//콜백지옥....CallBack-Hell
function getUser(userId, callback){
  setTimeout(()=>{
    //1초 지나서 실행 할 내용
    const idol = {
      id : userId,
      name : '장원영',
    }

    callback(idol);
  },1000);
}

//게시글 얻어오기
function getArticlce(){
 setTimeout(()=>{
  const articles = {
    id : userId,
      name : '장원영 첫 글',
    },
    {
    id : 2,
      title : '장원영 두번째 글',
    }
  ];
 },1000);
}

function getComments(commentId, callback){
  setTimeout(()=>{
    const comment= [
      {
      id : 1,
      comment : '장원영 첫 글',
      },
      {
      id : 2,
        title : '장원영 두번째 글',
      }
    ];
    callback(comments);

  },1000)
}
getUser(1, (result)=>{
  console.log('idol :' , result);
  getArticlce(result.id, (articles) =>{
    console.log('게시글 목록 : + ' , articles);
    getComments(articles[0].id, (comments) => {
      console.log('댓글 :', comments)
    })
  })
});