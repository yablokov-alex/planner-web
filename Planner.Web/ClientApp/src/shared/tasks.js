export class Tasks {
    
    constructor(taskType, tasks) {
        this.tasks = tasks.filter(task => task.type === taskType)
        this.count = this.tasks.filter(task => !task.isChecked).length
    }

}