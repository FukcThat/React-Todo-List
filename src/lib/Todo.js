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

export const TodoHydrator = (todo) => {
  return new Todo(
    todo.title,
    todo.description,
    todo.dueDate,
    todo.proirity,
    todo.projectId
  );
};
