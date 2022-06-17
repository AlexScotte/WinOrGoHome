import { API_KEY } from "./api-key.js";

export const baseUrl = "https://api.the-odds-api.com/v4/"; 

export async function GetAllSports(){

  let requestt = baseUrl + "sports/?apiKey=" + API_KEY;

  try {
    let res = await fetch(requestt);
    return res.json();

  } catch (error) {
    console.log(error);
    
  }
}