import { displayTodo } from "./index.js";

let addLocalStorage = function(project, todoItem){
    let stringifiedTodoItem = JSON.stringify(todoItem);
    localStorage.setItem(project, stringifiedTodoItem);
}

let getLocalStorage = function(project){
    let item = localStorage.getItem(project);
    let toObject = JSON.parse(item);
    return toObject;
}

let deleteLocalStorage = function(project, item){
    let storageProject = getLocalStorage(project);
    delete storageProject[item];
    if(Object.keys(storageProject).length == 0){
        localStorage.removeItem(project);
    } else {
        localStorage.setItem(project, JSON.stringify(storageProject));
    }
    displayTodo();
}

export {getLocalStorage, addLocalStorage, deleteLocalStorage};