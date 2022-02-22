let right = document.getElementById("right");
let rightChild = 0;

setInterval(() => {
  right.children[rightChild].style.width = "70%";
  setTimeout(() => {
    right.children[rightChild].style.width = "0%";
    rightChild += 1;
    if (rightChild === 5) rightChild = 0;
  }, 4000);
}, 6000);

let logo = document.getElementById("logo");
let title = document.getElementsByClassName("title");

window.addEventListener("scroll", () => {
  let y = scrollY;
  let x = window.innerHeight;
  if (y <= x * 0.2) {
    logo.style.top = 50 + y + "px";
    logo.style.left = 50 + y + "px";
  }

  if (y >= x * 0.5) {
    title[0].style.transform = "rotate(-90deg) translateY(0px)";
  } else {
    title[0].style.transform = "rotate(-90deg) translateY(-300px)";
  }
  if (y >= x * 1.5) {
    title[1].style.transform = "rotate(-90deg) translateY(0px)";
  } else {
    title[1].style.transform = "rotate(-90deg) translateY(-300px)";
  }
  if (y >= x * 2.5) {
    title[2].style.transform = "rotate(-90deg) translateY(0px)";
  } else {
    title[2].style.transform = "rotate(-90deg) translateY(-300px)";
  }
  if (y >= x * 3.5) {
    title[3].style.transform = "rotate(-90deg) translateY(0px)";
  } else {
    title[3].style.transform = "rotate(-90deg) translateY(-300px)";
  }
});

function scaleArrow(event) {
  event.target.style.transform = "scale(1.2) rotate(180deg)";
}

function unscaleArrow(event) {
  event.target.style.transform = "scale(1) rotate(180deg)";
  event.target.style.transitionDelay = "0s";
  setTimeout(() => {
    event.target.removeAttribute("style");
  }, 500);
}

let serviceCards = document.getElementsByClassName("service-card");

function showHiddenCardSide(event) {
  let serviceCardNumber = event.target.dataset.card;
  serviceCards[serviceCardNumber].style.boxShadow =
    "0px 0px 29px -1px rgba(0, 0, 0, 0.8)";
  serviceCards[serviceCardNumber].children[1].style.width = "0%";
  serviceCards[serviceCardNumber].children[2].style.width = "0%";
}

let hiddenRightSideContainer = document.querySelectorAll(
  ".service-card .hidden-right-side .hidden-right-side-container"
);

function changeOption(event) {
  let serviceCardNumber = event.target.dataset.card;
  let option = event.target.dataset.option;

  if (option == 1) {
    event.target.style.color = "black";
    serviceCards[
      serviceCardNumber
    ].children[0].children[0].children[0].children[1].style.color = "white";
    serviceCards[
      serviceCardNumber
    ].children[0].children[1].children[0].style.transform = "scale(1)";

    serviceCards[
      serviceCardNumber
    ].children[0].children[1].children[1].style.transform = "scale(0)";
    serviceCards[
      serviceCardNumber
    ].children[0].children[0].children[1].children[0].style.transform = "translateX(0%)";
  } else {
    event.target.style.color = "black";
    serviceCards[
      serviceCardNumber
    ].children[0].children[0].children[0].children[0].style.color = "white";
    serviceCards[
      serviceCardNumber
    ].children[0].children[1].children[0].style.transform = "scale(0)";

    serviceCards[
      serviceCardNumber
    ].children[0].children[1].children[1].style.transform = "scale(1)";
    serviceCards[
      serviceCardNumber
    ].children[0].children[0].children[1].children[0].style.transform = "translateX(99%)";
  }
}

function closeCard(event) {
  let serviceCardNumber = event.target.dataset.card;
  serviceCards[serviceCardNumber].removeAttribute("style");
  serviceCards[serviceCardNumber].children[1].style.width = "80%";
  serviceCards[serviceCardNumber].children[2].style.width = "20%";
}



function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
  let paths = document.querySelectorAll("path");
  let mode=repeat?'infinite':'forwards'
  for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
  }
}

function startSVG() {
  setTextAnimation(0.1,3.2,2,'ease-in-out','#ffffff',false);
}
