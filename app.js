//const h2 = document.querySelector("h2");

const form = document.querySelector("form");
const generate = document.querySelector("#generate")
const guess = document.querySelector("#guess");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");



function setnumber(event){
    event.preventDefault();

    const guessNum = guess.value;
    const machineChoseNum = Math.ceil(Math.random() * generate.value);
    console.log(machineChoseNum);

    showResult(guessNum, machineChoseNum);
}


function showResult(guessNum, machineChoseNum){

    let finalresult;

    if(guessNum == machineChoseNum){
        finalresult = `won!`;
    }
    else{
        finalresult = `lost!`;
    }


    result1.innerHTML = `You chose: ${guessNum}, machine chose: ${machineChoseNum}.`;
    result2.innerHTML = `You ${finalresult}`;
    result1.classList.remove("hidden");
    result2.classList.remove("hidden");

}

form.addEventListener("submit", setnumber);

