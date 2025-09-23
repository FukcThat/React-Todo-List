export class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isDone = false;
  }

  ToggleDone = () => {
    this.isDone = !this.isDone;
  };
}
