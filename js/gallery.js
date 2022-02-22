let galleryImg = document.getElementsByClassName("gallery-image");
let fullGallery = document.getElementById("full-gallery");

for (let i = 0; i < galleryImg.length; i++) {
  galleryImg[i].setAttribute("data-position", i);
  galleryImg[i].setAttribute("onclick", "fullGall(event)");
  let src = galleryImg[i].getAttribute("src");
  let lastDot = src.toString().lastIndexOf(".");
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    src.substring(0, lastDot) + "-full." + src.substring(lastDot + 1)
  );
  img.setAttribute("class", "full-image");
  fullGallery.appendChild(img);
}

let fullImg = document.getElementsByClassName("full-image");

let position;

function fullGall(event) {
  fullGallery.style.opacity = "1";
  fullGallery.style.pointerEvents = "inherit";
  position = Number(event.target.dataset.position);
  for (let i = 0; i < fullImg.length; i++) {
    fullImg[i].style.opacity = 0;
  }
  fullImg[position].style.opacity = "1";
}

function closeFull() {
  fullGallery.style.opacity = "0";
  fullGallery.style.pointerEvents = "none";
  for (let i = 0; i < fullImg.length; i++) {
    fullImg[i].style.opacity = 0;
  }
}

function next() {
  for (let i = 0; i < fullImg.length; i++) {
    fullImg[i].style.opacity = 0;
  }

  if(position === fullImg.length - 1) {
      position = 0
  } else {
    position += 1;
  }

  fullImg[position].style.opacity = "1";
}


function pre() {
    for (let i = 0; i < fullImg.length; i++) {
      fullImg[i].style.opacity = 0;
    }

    
  
    if(position === 0) {
        position = fullImg.length - 1
    } else {
      position -= 1;
    }

    fullImg[position].style.opacity = "1";
  }