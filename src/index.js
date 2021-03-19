
document.addEventListener("DOMContentLoaded", () => {
  
  let TaskLister = document.querySelector("form#create-task-form")
  TaskLister.addEventListener("submit", function(evt){
    evt.preventDefault()
  })
// your code here
});

let toDo = document.querySelector("form#create-task-form")
let list = document.querySelector("#tasks")

toDo.addEventListener("submit", function(){
  let tasks = document.createElement("li")
  list.innerText = ""
  list.append(tasks)
})



