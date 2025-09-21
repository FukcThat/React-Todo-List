export class Todo {
    constructor(title, description) {
        this.title = title
        this.description = description 
        this.isDone = false
    }

    ToggleDone = () => {
        this.isDone = !this.isDone
    }
}
