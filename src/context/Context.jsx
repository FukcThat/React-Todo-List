import { createContext, use, useContext, useEffect, useState } from "react";
import { TodoHydrator } from "../lib/Todo";
import { dummyProjects, dummyTodoArray } from "../lib/data";
import { ProjectHydrator } from "../lib/Project";
import useLocalStorage from "../hooks/useLocalStorage";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage(
    "react-todos",
    dummyTodoArray,
    TodoHydrator
  );

  const [projects, setProjects] = useLocalStorage(
    "react-projects",
    dummyProjects,
    ProjectHydrator
  );

  const [isEditing, setIsEditing] = useState(null);
  const [activeProject, setActiveProject] = useState("");
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

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

  const toggleVisibility = (isTodo = true) => {
    if (isTodo) {
      setShowTodoForm((isOpen) => !isOpen);
    } else {
      setShowProjectForm((isOpen) => !isOpen);
    }
  };

  const deleteTodo = (title) =>
    setTodos(todos.filter((todo) => todo.title !== title));

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        showTodoForm,
        projects,
        setProjects,
        showProjectForm,
        isEditing,
        setIsEditing,
        activeProject,
        setActiveProject,
        toggleDone,
        deleteTodo,
        toggleVisibility,
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
