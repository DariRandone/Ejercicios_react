let getNameAxios = async (idPost) => {
  try {
    let resPost = await axios (
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    document.write(idPost);
    let resUser = await axios(
      `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
    );
    //console.log(resUser);
    document.write(
      `${resUser.data.name} vive en ${resUser.data.adress.street}`
    );
  } catch (error) {
    //console.log(error);
  }
};

getNameAxios(2);
