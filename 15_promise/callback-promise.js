function getUser(userId){
  return new Promise((resolve,reject)=> {
    setTimeout(()=>{
    //1초 지나서 실행 할 내용
    try {
    const idol = {
      id : userId,
      name : '장원영',
    }
    resolve(idol);
  }catch{
reject(error);
  }
  },1000);
})
}


//게시글 얻어오기 
function getArticlce(articlesId){
  return new Promise((resolve,reject)=> {
  setTimeout(() => {
    try{
      const articles = [
        {
          id : 1,
          name : '장원영 첫 글',
        },
        {
          id : 2,
          name : '장원영 두번째 글',
        }
      ];
      resolve(articles);
    }catch {
      reject(error)
    }
  },1000);
})

}

      
function getComments(commentID){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      try{
        const comments = [
          {
            id : 1,
            comment : '첫 댓글',
          },
          {
            id2,
            comment : '두번째 댓글'
          },
          {
            id:3,
            comment : '세번째 댓글',
          }
        ];
      }
      
    }, timeout);
  }
}

      }
      catch(erroe) {
        reject(error);
      }
      


      // Async : 비동기 , await : 기다림...
      //늘 같이 다니는 짝... 

      getUser(1)
      .then((x)=> {
        console.log(x);
        return getArticlce(x.id);
      })
      .then((article) => {
        console.log(article);
        return getComments(article[0].id)
      })
      .then((Comments)=>{
        console.log(comments);
      })
      .catch((err) => {
      console.log('Error')
    })
    .finally(()=> console.log('Finally'));
      

    async function runPromise(){
      await getUser(2)
      .then((user) => {
        if(user != null){
          console.log('user : ', user);
        } else {
          console.log('자리가 없어요');
        
      });
    

    runPromise();