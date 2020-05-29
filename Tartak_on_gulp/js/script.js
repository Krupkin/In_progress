'use script';

// _________MAIN BUTTON___________
// Делаем меню навигации
const menuButton = document.querySelector('.menu-btn ');
const menuNavigation = document.querySelector('.header-menu');

menuNavigation.addEventListener("click", hideMenu)
function hideMenu(evt) {
    if(evt.target.nodeName !== "A"){
        return
    }
    menuNavigation.classList.toggle('menu-nav_active');
}

menuButton.addEventListener('click', toogleMenu);
function toogleMenu(evt) {
    menuButton.classList.toggle('menu-btn_active');
    menuNavigation.classList.toggle('menu-nav_active');
}

// _________ANCHORS___________
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href');

    document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});
}

const sliderNavigator = document.querySelector(".slider-menu");
const header = document.querySelector(".header");
sliderNavigator.addEventListener("click", itemPressed)

function itemPressed(ev){
    if(ev.target.nodeName !== "LI"){
        return
    }
    sliderNavigator.querySelectorAll("li").forEach(element => {
        element.classList.remove("item-active")
    });
    const buttonSwitch = ev.target;
    buttonSwitch.classList.add("item-active")

    switch(buttonSwitch.dataset.bg){
        case "bg1":
            header.style.backgroundImage ="url('/img/slider/1.jpg')";
        break;
        case "bg2":
            header.style.backgroundImage ="url('/img/slider/2.jpg')"
        break;
        case "bg3":
            header.style.backgroundImage ="url('/img/slider/3.jpg')"
        break;
        case "bg4":
            header.style.backgroundImage ="url('/img/slider/4.jpg')"
        break;
    }
}

setInterval((()=>{
    let curentItem = sliderNavigator.querySelector(".item-active");
    sliderNavigator.querySelectorAll("li").forEach(element => {
        element.classList.remove("item-active")
    });
    if(curentItem.nextElementSibling === null){
        sliderNavigator.firstElementChild.classList.add("item-active");
        header.style.backgroundImage ="url('/img/slider/1.jpg')";
    }
    curentItem.nextElementSibling.classList.add("item-active");
    switch(curentItem.dataset.bg){
        case "bg1":
            header.style.backgroundImage ="url('/img/slider/2.jpg')";
        break;
        case "bg2":
            header.style.backgroundImage ="url('/img/slider/3.jpg')"
        break;
        case "bg3":
            header.style.backgroundImage ="url('/img/slider/4.jpg')"
        break;
    }
}), 19999);
