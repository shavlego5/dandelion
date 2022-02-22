//pre loader spiner

let loader = document.getElementById("loader");
let dandelionContainer = document.querySelector("#loader div");
let dandelionFoursCount = 60;

let prefix = "";

prefix = checkHome ? "" : "../";

for (let i = 0; i < dandelionFoursCount; i++) {
  let img = document.createElement("img");
  img.setAttribute("src", prefix + "images/dandelionFur.png");
  dandelionContainer.appendChild(img);
}

let dandelionFur = document.querySelectorAll(
  "#loader div img:not(:first-child)"
);

for (let i = 0; i < dandelionFur.length; i++) {
  dandelionFur[i].style.transform = `rotate(${
    i * (360 / dandelionFur.length)
  }deg) translate(10px)`;
}

// creating unsortered array from 0 to dandelionsFurCount

let furArray = [];

let unsorteredArray = setInterval(() => {
  let position = Math.floor(Math.random() * dandelionFoursCount);
  if (furArray.length === dandelionFoursCount) {
    clearInterval(unsorteredArray);
  } else if (furArray.includes(position) === false) {
    furArray.push(position);
  }
}, 0); 

//remove furs randomly from dandelion
window.addEventListener("load", () => {
    let x = 0;
    let fur = setInterval(() => {
      dandelionFur[furArray[x]].style.transition = "5s"; // fur movement speed
      dandelionFur[furArray[x]].classList.add("remove-fur"); // add removing animation tu dandelion
      dandelionFur[furArray[x]].style.marginRight = "3000px";
      dandelionFur[furArray[x]].style.marginTop =
        Math.floor(Math.random() * 1000) + "px";
      x++;
      if (x === dandelionFur.length - 1) clearInterval(fur);
    }, 30);
    setTimeout(()=>{
        loader.style.marginLeft = "-100%";
    }, 30 * dandelionFoursCount + 1000)
});

//   /pre loader spiner 