const body = document.querySelector("body");

const IMG_NB = 4;

function handleImgLoad(){
  console.log("finished loading");
}

function paintIMG(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImg");
  body.prepend(image);
  image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
  const number = Math.floor(Math.random()* IMG_NB);
  return number;
}

function init(){
  const randomnumber = genRandom();
  paintIMG(randomnumber);
}
init();
