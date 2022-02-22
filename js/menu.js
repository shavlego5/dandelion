// menu

let menuButton = document.getElementById("menu-button");
let menuContainer = document.getElementById("menu-container");
let menuCheker = "closed";

function menu() {
  menuButton.children[0].classList.remove("drop-down");
  menuButton.children[0].classList.add("drop-down");
  setTimeout(() => {
    menuButton.children[0].style.transform = "scale(3) translateY(-10px)";
  });
  setTimeout(() => {
    menuButton.children[0].classList.remove("drop-down");
    menuButton.children[0].style.transform = "scale(1)";
  }, 3000);
  if (menuCheker === "closed") {
    menuContainer.style.opacity = "1";
    menuContainer.style.pointerEvents = "visible";
    setTimeout(() => {
      for (let i = 0; i < menuContainer.children.length; i++) {
        if (i % 2 === 0) {
          menuContainer.children[i].style.marginLeft = "0%";
        } else {
          menuContainer.children[i].style.marginRight = "0%";
        }
      }
    }, 500);
    setTimeout(() => {
      menuButton.children[0].children[1].style.textDecoration = "line-through";
    }, 3500);
    menuCheker = "opened";
  } else {
    for (let i = 0; i < menuContainer.children.length; i++) {
      if (i % 2 === 0) {
        menuContainer.children[i].style.marginLeft = "-150%";
      } else {
        menuContainer.children[i].style.marginRight = "-150%";
      }
    }
    setTimeout(() => {
      menuContainer.style.opacity = "0";
      menuContainer.style.pointerEvents = "none";
    }, 500);
    setTimeout(() => {
      menuButton.children[0].children[1].style.textDecoration = "none";
    }, 3500);
    menuCheker = "closed";
  }
}

function changeImg() {
  if(checkHome) {
    menuButton.children[0].children[0].style.backgroundImage = `url(images/wed${Math.floor(
      Math.random() * 11
    )}.jpg)`;
  } else {
    menuButton.children[0].children[0].style.backgroundImage = `url(../images/wed${Math.floor(
      Math.random() * 11
    )}.jpg)`;
  }
}