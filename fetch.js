let getNameFetch = async (idPost) =>  {
      try {
          fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
          .then ((res)=>{
            console.log(res);
        return res.json();

          })
          .then ((post)=>{
            fetch (`https://jsonplaceholder.typicode.com/users/${post.userId})
            console.log(post);

          })
          //let post = await resPost.json()
         // console.log(post);
       //let resUsers = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`);
       //let user = await resUsers.json()
       //console.log(user)
        //document.write(`El posteo ${idPost} lo escribió ${user.name} y vive en ${user.address.street}`)
      
      
      } catch (error) {
        console.log(error)
      }


};
getNameFetch (2);