const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


for(let select of dropdowns){
    for (Currcode in countryList){
       let newOption = document.createElement("option");
       newOption.innerText = Currcode;
       newOption.value = Currcode;
       if(select.name === "from" && Currcode === "USD"){
        newOption.selected = "selected";
       }else if(select.name === "to" && Currcode === "INR"){
        newOption.selected = "selected";
       }
       select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateflag(evt.target)
    })
}
const updateflag = (element) =>{
    let Currcode = element.value;
    let countryCode = countryList[Currcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

button.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`;
    let response = await fetch(URL);
    console.log(response);
})