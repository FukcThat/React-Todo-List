import { Project } from "./Project";
import { Todo } from "./Todo";

export const priorityTypes = ["None", "Small", "Kinda Big", "Monumental"];

export const dummyTodoArray = [
  new Todo("Pet the Gitten", "On the noggin."),
  new Todo("Have a snack", "Simch Maybe"),
  new Todo("Nap", "For at least 3 hours."),
];

export const dummyProjects = [
  new Project("1", "Home"),
  new Project("2", "Work"),
];
