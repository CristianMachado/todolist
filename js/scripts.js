//Select Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

//Functions
const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const h3 = document.createElement("h3");
    h3.innerText = text;
    todo.appendChild(h3);

    const donebtn = document.createElement("button");
    donebtn.classList.add("finish-todo");
    donebtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(donebtn);

    const editbtn = document.createElement("button");
    editbtn.classList.add("edit-todo");
    editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editbtn);

    const removebtn = document.createElement("button");
    removebtn.classList.add("remove-todo");
    removebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(removebtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();

}

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }        

    })

}

//Events
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    }
})

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerHTML;
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-todo")){
       toggleForms();
       editInput.value = todoTitle;
       oldInputValue = todoTitle;
    }


})


cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    toggleForms();
})


editForm.addEventListener("submit", (e) => {
 e.preventDefault();

 const editInputValue = editInput.value;

 if(editInputValue){
    updateTodo(editInputValue);
 }

 toggleForms();

})
function search() {
    
    let input = document.querySelector(".searchbar").value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName("todo");

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerText.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else{
            x[i].style.display="flex";                 
        }
     
    }
  
}
let reset = window.document.querySelector("#erase-button");
let inputText = document.querySelector(".searchbar");
reset.addEventListener("click", function(){
   if(inputText.value.length){
      inputText.value = inputText.value.substr(0, inputText.value.length -1);
      inputText.focus();
      search();
   }
   
});

const filter = document.querySelector("#filter-select");

filter.addEventListener("click", function(){
    let x = document.getElementsByClassName("todo");
    if(filter.value=="all"){
        for(i=0;i<x.length;i++){
            x[i].style.display="flex";    
        }
    }
    if(filter.value=="done"){
        for(i=0;i<x.length;i++){
            if(x[i].className=="todo done"){
                x[i].style.display="flex"; 
            }else{
                x[i].style.display="none";
            }
            
        }
    }
    if(filter.value=="todo"){
        for(i=0;i<x.length;i++){
            if(x[i].className=="todo"){
                x[i].style.display="flex"; 
            }else{
                x[i].style.display="none";
            }
            
        }
    }



});
