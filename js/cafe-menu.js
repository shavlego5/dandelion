// menu

let menuButton = document.getElementById("menu-button");
let menuContainer = document.getElementById("menu-container");
let menuCheker = "closed";

function menu() {
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
    menuCheker = "closed";
  }
}
