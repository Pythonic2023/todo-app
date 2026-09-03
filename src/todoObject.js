// Create new todoObject

import { defaultProject } from "./project.js";

// Create storage object which will have a dictionary of todoItems, and add/remove features. Maybe use project object

class TodoItem{
    constructor(title, project, description, dueDate, priority){
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.uuid = this.generateUUID();
    }
    
    checkProjectPropertyEmpty(item){
        if(item.project.length == 0) {
            return item.project = defaultProject.getProjectName();
        } else {
            return item.project;
        }
    }

    logTitle(){
        console.log(this.title);
    }

    generateUUID(){
        let uuid = crypto.randomUUID();
        let splitUUID = uuid.split("-");
        return splitUUID.at(-1);
    }

}

let createTodoItem = function(...args){
    let myItem = new TodoItem(...args);
    myItem.project = myItem.checkProjectPropertyEmpty(myItem);
    return myItem;
}

export {createTodoItem};