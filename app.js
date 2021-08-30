//const h2 = document.querySelector("h2");

const form = document.querySelector("form");
const generate = document.querySelector("#generate")
const guess = document.querySelector("#guess");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");


function setnumber(event){
    event.preventDefault();
    console.log(generate.value);
    console.log(guess.value);

    showResult(generate.value, guess.value);
}


function showResult(){

    let finalresult;
    if(generate.value === guess.value){
        finalresult = `won!`;
    }
    else{
        finalresult = `lost!`;
    }


    result1.innerHTML = `You chose: ${generate.value}, machine chose: ${guess.value}`;
    result2.innerHTML = `You ${finalresult}`;
    result1.classList.remove("hidden");
    result2.classList.remove("hidden");

}

form.addEventListener("submit", setnumber);

