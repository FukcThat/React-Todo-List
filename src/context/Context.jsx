import { createContext, useContext, useEffect, useState } from "react";
import { Todo } from "../lib/Todo";
import { dummyProjects, dummyTodoArray } from "../lib/data";
import { Project } from "../lib/Project";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    localStorage.getItem("react-todos")
      ? JSON.parse(localStorage.getItem("react-todos")).map((todo) => {
          return new Todo(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.proirity,
            todo.projectId
          );
        })
      : dummyTodoArray
  );

  const [projects, setProjects] = useState(
    localStorage.getItem("react-projects")
      ? JSON.parse(localStorage.getItem("react-projects")).map((project) => {
          return new Project(project.id, project.name);
        })
      : dummyProjects
  );

  const [isEditing, setIsEditing] = useState(null);
  const [activeProject, setActiveProject] = useState("");

  useEffect(() => {
    localStorage.setItem("react-todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("react-projects", JSON.stringify(projects));
  }, [projects]);

  const toggleDone = (title) => {
    setTodos(
      todos.map((todo) => {
        if (todo.title === title) {
          todo.ToggleDone();
        }
        return todo;
      })
    );
  };

  const deleteTodo = (title) =>
    setTodos(todos.filter((todo) => todo.title !== title));

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        projects,
        setProjects,
        isEditing,
        setIsEditing,
        activeProject,
        setActiveProject,
        toggleDone,
        deleteTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("Sucks for you. (Must be inside Provider)");
  }
  return context;
}
