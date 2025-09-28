export class Todo {
  constructor(title, description, dueDate, priorityType, projectId = "") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorityType = priorityType;
    this.isDone = false;
    this.projectId = projectId;
  }

  ToggleDone = () => {
    this.isDone = !this.isDone;
  };

  ResetProject = () => {
    this.projectId = "";
  };
}
