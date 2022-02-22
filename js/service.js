let serviceBG = document.getElementsByClassName("service-bg");
let servicePrice = document.getElementsByClassName("service-price");
let serviceExplain = document.getElementsByClassName("service-explain");
let serviceVideo = document.getElementsByClassName("service-video");

function chooseService(event) {
    let serviceNumber = event.target.dataset.service;
    let checker = event.target.dataset.checker;
    let parentChildren = event.target.parentElement.children;
    for(let i = 0; i < parentChildren.length; i++) {
        parentChildren[i].style.color = "white";
    }
    event.target.style.color = "black";

    if(checker == 0) {
        serviceBG[serviceNumber].style.transform = "translateX(0%)";
    } else if (checker == 1) {
        serviceBG[serviceNumber].style.transform = "translateX(98%)";
    } else {
        serviceBG[serviceNumber].style.transform = "translateX(197%)";
    }

    for(let i = 0; i < servicePrice[serviceNumber].children.length; i++) {
        servicePrice[serviceNumber].children[i].style.opacity = "0"
    }

    setTimeout(()=>{
        servicePrice[serviceNumber].children[checker].style.opacity = "1";
    },300)

    for(let i = 0; i < serviceExplain[serviceNumber].children.length; i++) {
        serviceExplain[serviceNumber].children[i].style.left = "100%"
    }

    setTimeout(()=>{
        serviceExplain[serviceNumber].children[checker].style.left = "0%";
    },300)

    for(let i = 0; i < serviceVideo[serviceNumber].children.length - 1; i++) {
        serviceVideo[serviceNumber].children[i].style.opacity = "0";
    }

    serviceVideo[serviceNumber].children[checker].style.opacity = "1";
}