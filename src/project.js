// Create project objects and have object for storing of todoObjects in each project. 

class Project{
    constructor(projectName){
        this.projectName = projectName;
        this.todoObjects = {};
    }

    addTodo(itemObject){
        let itemPriority = itemObject.priority;
        this.todoObjects[itemPriority] = itemObject;
    }

    removeTodo(itemObject){
        let itemPriority = itemObject.priority;
        delete this.todoObjects[itemPriority];
    }
}

let defaultProject = new Project("Default Project");

export {Project, defaultProject};