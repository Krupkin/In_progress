"use strict";
const userData = {
    first_name: "",
    second_name: "",
    birthDay: ""
}

let userInputText = ""

const keyBoard = document.querySelector(".keyboard-script");
const userInputEl = document.querySelector(".info-input-top");
const navigationKeys = document.querySelector(".navigator");
const titleText = document.querySelector(".info-title-top")

// РАБОТА С КЛАВИАТУРОЙ

function keyPusher(evt){
    if(evt.target.nodeName === "LI" && evt.target.textContent !== "🠐"){
        userInputText += evt.target.textContent;
        userInputEl.value = userInputText;
    } else if(evt.target.textContent === "🠐"){
        userInputText = userInputText.substring(0,  userInputText.length - 1)
        userInputEl.value = userInputText;
    }
}

// НАВИГАЦИЯ

function dataCheker(){
    userInputText.length === 0;
}

function goToNextBlock(evt){
    switch(titleText.textContent){
        case "Будь ласка введіть Ваше ім'я":
            userData.first_name = userInputText.toUpperCase();
            userInputEl.value = "";
            userInputText = "";
            titleText.textContent = `Також введіть Ваше прізвище`
            evt.target.previousElementSibling.style.display = "block"
            evt.target.previousElementSibling.classList.add('animated', 'bounceInLeft', "delay-0.2s")
        break;
        case "Також введіть Ваше прізвище":
            userInputEl.value = "";
            userData.second_name = userInputText.toUpperCase();
            userInputText = "";
            titleText.textContent = `Зробіть селфі`
            // userInputEl.style.display = "none";
            userInputEl.classList.add('animated', 'bounceOutUp', "delay-0.2s")
            keyBoard.classList.add('animated', 'bounceOutDown', "delay-0.2s")
            startCamera()
        break
    }

}



function navigateTo(evt){
    switch(evt.target.dataset.nav){
        case "left":
            if(!dataCheker()){
                goToPrevBlock()
            }
            else{

            }
        break;
        case "right":
            goToNextBlock(evt)
        break
    }
}

keyBoard.addEventListener("click", keyPusher)
navigationKeys.addEventListener("click", navigateTo)


