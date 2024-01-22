let url="https://api.adviceslip.com/advice";

document.querySelector(".dice-img").addEventListener("click", generate)
function generate(){
    let advice=document.querySelector(".advice");
    let number=document.getElementById("number")
    fetch(url)
    .then(data =>data.json())
    .then(res =>
    {
    number.innerHTML=res.slip.id;
    advice.innerHTML=res.slip.advice;
    })
}

