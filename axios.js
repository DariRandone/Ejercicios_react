let getAxios = async (idPost) =>  {
    try {
        let resPost= await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
          Document.write(resPost);
          let resUser= await axios(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          Document.write(resUser);
        
        
        
    } catch (error) {
      console.log(error)
    }}



getAxios (2);