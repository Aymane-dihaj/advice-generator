const generatorApi = "https://api.adviceslip.com/advice";
const btnEl = document.getElementById("btn");
const diceEl = document.getElementById("dice");
const adviceID = document.querySelector("#advice-id");
const advice = document.querySelector(".advice");

document.addEventListener("DOMContentLoaded", FetchData);

btnEl.addEventListener("click", FetchData);

async function FetchData()
{
    const response = await fetch(generatorApi);
    const json = await response.json()
    adviceID.textContent = `#${json.slip.id}`
    advice.textContent = `"${json.slip.advice}"`
}

let shakeAnimation = [
    {
        transform: "rotate(50deg)"
    },
    {
        transform: "rotate(-50deg)"
    }
]

btnEl.addEventListener("click", function() 
{
    diceEl.animate(shakeAnimation, 100);
})