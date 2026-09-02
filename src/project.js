// Create project objects and have object for storing of todoObjects in each project. 

class Project{
    constructor(projectName){
        this.projectName = projectName;
        this.todoObjects = {};
    }

    addTodo(itemObject){
        let itemUUID = itemObject.uuid;
        this.todoObjects[itemUUID] = itemObject;
        console.log(this.todoObjects);
    }

    removeTodo(itemObject){
        let itemUUID = itemObject.uuid;
        delete this.todoObjects[itemUUID];
    }
}

let defaultProject = new Project("Default Project");

export {Project, defaultProject};