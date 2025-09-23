export class Todo {
  constructor(title, description, dueDate, priorityType) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorityType = priorityType;
    this.isDone = false;
  }

  ToggleDone = () => {
    this.isDone = !this.isDone;
  };
}
