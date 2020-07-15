const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${
    hours < 10 ? `0${hours}` : hours
  }:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds}`;
  }
//  ? >> if   : >> else
function init(){
  // getTime();
  setInterval(getTime, 1000)
}
init();

/* setInterval(fn, 1000);
(fn, time) 첫 번째 인자로 실행할 함수를 받고 그 함수를 실행하고 싶은 시간(반복될 시간)*/
