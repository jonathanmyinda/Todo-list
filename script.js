const taskInput = document.querySelector('#taskInput')
const taskDesc = document.querySelector('#taskDesc')
const taskPriorité = document.querySelector('#taskPriorité')
const addTaskButton = document.querySelector('#addTaskButton')
const taskList = document.querySelector('#taskList')
let counter = 0;
addTaskButton.addEventListener("click", () => {
    let tr = document.createElement('tr')
   counter++;
    tr.innerHTML = `
    <td>${counter}</td>
    <td>${taskInput.value}</td>
    <td>${taskDesc.value}</td>
    <td>${taskPriorité.value}</td>
    <td><button class="delete">supprimer</button></td>`
taskList.appendChild(tr)
tr.querySelector('.delete').addEventListener("click", () => {
    tr.remove()
    updateCounters()
})
  taskInput.value = "";
  taskDesc.value = "";
  taskPriorité.value = "";

});
