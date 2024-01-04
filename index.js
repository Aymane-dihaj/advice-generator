const generatorApi = "https://api.adviceslip.com/advice";
const btnEl = document.querySelector(".btn");
const adviceID = document.querySelector("#advice-id");
const advice = document.querySelector(".advice");

document.addEventListener("DOMContentLoaded", FetchData);

btnEl.addEventListener("click", FetchData);

async function FetchData()
{
    const response = await fetch(generatorApi);
    const json = await response.json()
    console.log(json.slip);
    adviceID.textContent = `#${json.slip.id}`
    advice.textContent = `"${json.slip.advice}"`
}


