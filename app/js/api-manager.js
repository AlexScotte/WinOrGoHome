// TODO: externalize the api key
const apiKey = "***";
const baseUrl = "https://api.the-odds-api.com/v4/"; 

async function GetAllSports(){

  let request = baseUrl + "sports/?apiKey=" + apiKey;

  try {
    let res = await fetch(request);
    return await res.json();

  } catch (error) {
    console.log(error);
    
  }
}