//let getNameAsync = async (idPost) =>  {


  //  https://jsonplaceholder.typicode.com/posts/
    //https://jsonplaceholder.typicode.com/users/

   //fetch ("https://jsonplaceholder.typicode.com/todos/3")
   //.then (response =>response.json())
   //.then (data=> console.log(data));
   
   /* const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
   const getCaracters = async (baseURL)=> {
    const res = await fetch (baseURL + '/character');
    const data =await res.json();
    console.log(data);
   } */
   async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await response.json();
  console.log(data) ; 
   }
   getPosts(1)

//getNameAsync (1)*/