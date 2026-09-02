// Create new todoObject

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
    return myItem;
}

export {createTodoItem};