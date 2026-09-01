// Create project objects and have object for storing of todoObjects in each project. 

class Project{
    constructor(projectName){
        this.projectName = projectName;
        this.todoObjects = {};
    }

    storeInProject(itemObject){
        //Object.assign(this.todoObjects, itemObject);
        let itemPriority = itemObject.priority;
        this.todoObjects[itemPriority] = itemObject;
    }
}

let defaultProject = new Project("Default Project");

export {Project, defaultProject};