
document.addEventListener("DOMContentLoaded", () => {
  
  let TaskLister = document.querySelector("form#create-task-form")
  TaskLister.addEventListener("submit", function(evt){
    evt.preventDefault()
  })
// your code here
});

let toDo = document.querySelector("form#create-task-form")
let ulHolder = document.querySelector("#tasks")

toDo.addEventListener("submit", function(){
  let newTasks = document.createElement("li")
  let entry = document.querySelector("input#new-task-description")
  newTasks.innerText = entry.value
  ulHolder.append(newTasks)
})

