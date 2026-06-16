export const GetCharacters = async (url = "https://rickandmortyapi.com/api/character") => {

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error getting products");
  }

  //console.log(res.json());
  

  return res.json();
};