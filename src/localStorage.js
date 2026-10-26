
let addLocalStorage = function(project, todoItem){
    console.log(todoItem)
    let stringifiedTodoItem = JSON.stringify(todoItem);
    localStorage.setItem(project, stringifiedTodoItem);
}

let getLocalStorage = function(project){
    let item = localStorage.getItem(project);
    let toObject = JSON.parse(item);
    return toObject;
}

export {getLocalStorage, addLocalStorage};