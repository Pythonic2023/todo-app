// Create new todoObject

// Create storage object which will have a dictionary of todoItems, and add/remove features. Maybe use project object

class TodoItem{
    constructor(title, project, description, dueDate, priority){
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    logTitle(){
        console.log(this.title);
    }

}

let createTodoItem = function(...args){
    let myItem = new TodoItem(...args);
    return myItem;
}

export {createTodoItem};