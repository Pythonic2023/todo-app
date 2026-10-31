import { addLocalStorage, getLocalStorage } from "./localStorage.js";
import { format } from "date-fns";

class TodoItem{
    constructor(title, project, description, dueDate, priority, status = "Incomplete"){
        this.title = title;
        this.project = (!project) ? "Default Project" : project;
        this.description = description;
        this.dueDate = format(new Date(dueDate), "yyyy/MMM/dd");
        this.priority = priority;
        //this.uuid = this.generateUUID();
        this.status = status;
        
    }
}

let createTodoItem = function(...args){
    let project = args[1];
    let projectObject = {};
    let storageResult = checkLocalStorage(project);
    let newItem = new TodoItem(...args);

    if(storageResult != null){
        projectObject[newItem.title] = newItem;
        Object.assign(storageResult, projectObject);
        addLocalStorage(project, storageResult);
    } else {                                                        // REMOVE STRING OBJECT
        projectObject[newItem.title] = newItem;
        addLocalStorage(newItem.project, projectObject);
    }
}

let checkLocalStorage = function(project){
    let isStored = getLocalStorage(project);
    return isStored;
}

export {createTodoItem};