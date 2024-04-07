const getCharacters =async()=> {
    const response =await fetch('https://rickandmortyapi.com/api/character');
    const data = response.json();

    console.log(data);

}
getCharacters();

