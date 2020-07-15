const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
    //parseInt >> string을 숫자로 바꿈
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //로컬스토리지에는 string형태만 저장돼 있어서
}

function paintToDo(text){
  const li = document.createElement("li");
  //li를 js로 생성하려는 것. const에 있는 li는 그냥 이름.
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "x";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}


function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parseToDos = JSON.parse(loadedToDos);
    //string으로 변환했던 것을 다시 object로 변환시켜줌.
    parseToDos.forEach(function(toDo){
      //저장된 parseToDos 각각에 함수 paintToDo를 실행시켜 주는 것.
      //forEach는 array를 위한 function. array에 담겨있는 각각에 함수를 한번씩 실행시켜 줌
      paintToDo(toDo.text);//text는 toDoObj의 text?
    })
  }
}

function init(){
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
