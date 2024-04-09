let getNameAsync = async (idPost) =>  {
      try {
        let resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        //console.log(resPost);
        let post = await resPost.json()
          console.log(post);
       let resUsers = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`);
       let user = await resUsers.json()
       console.log(user)
        document.write(`El posteo ${idPost} lo escribió ${user.name} y vive en ${user.address.street}`)
      
      
      } catch (error) {
        console.log(error)
      }


};
getNameAsync (2);