import { addLocalStorage, getLocalStorage } from "./localStorage.js";

class TodoItem{
    constructor(title, project, description, dueDate, priority, status = "Incomplete"){
        this.title = title;
        this.project = (!project) ? "Default Project" : project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.uuid = this.generateUUID();
        this.status = status;
        
    }

    generateUUID(){
        let uuid = crypto.randomUUID();
        let splitUUID = uuid.split("-");
        return splitUUID.at(-1);
    }

}

// YOU NEED TO NOW ASSIGN MULTIPLE NEW OBJECTS TO AN ALREADY EXISTING ONE IN LOCAL STORAGE

let createTodoItem = function(...args){
    let project = args[1];
    let projectObject = {};
    let storageResult = checkLocalStorage(project);
    let newItem = new TodoItem(...args);

    if(storageResult != null){
        let parsedResult = JSON.parse(storageResult);
        projectObject[newItem.uuid] = newItem;
        Object.assign(parsedResult, projectObject);
        localStorage.removeItem(storageResult);
        addLocalStorage(project, parsedResult);
    } else {
        projectObject[newItem.uuid] = newItem;
        addLocalStorage(newItem.project, projectObject);
    }
}

let checkLocalStorage = function(project){
    let isStored = getLocalStorage(project);
    return isStored;
}

let returnedItem = checkLocalStorage("Default Project");
console.log(returnedItem)

export {createTodoItem};