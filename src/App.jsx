import { useEffect, useMemo, useState } from "react";
import { dummyTodoArray } from "./lib/DummyTodos";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import EditingTodoContainer from "./components/EditingTodoContainer";
import ProjectForm from "./components/ProjectForm";
import ProjectNavBar from "./components/ProjectNavBar";
import { dummyProjects } from "./lib/DummyProjects";

function App() {
  const [todos, setTodos] = useState(dummyTodoArray);
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [isEditing, setIsEditing] = useState(null);

  const [projects, setProjects] = useState(dummyProjects);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      activeProject == null ? true : activeProject == todo.projectId
    );
  }, [activeProject]);

  const toggleVisibility = (isTodo = true) => {
    if (isTodo) {
      setShowTodoForm((isOpen) => !isOpen);
    } else {
      setShowProjectForm((isOpen) => !isOpen);
    }
  };

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
    <>
      <ProjectNavBar
        projects={projects}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <button onClick={toggleVisibility}>{showTodoForm ? "x" : "+"}</button>
      {showTodoForm && <TodoForm setTodos={setTodos} projects={projects} />}
      <div>
        {filteredTodos.map((todo) => {
          return todo.title !== isEditing ? (
            <TodoContainer
              key={todo.title}
              todo={todo}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
              setIsEditing={setIsEditing}
            />
          ) : (
            <EditingTodoContainer
              key={todo.title}
              todo={todo}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
              setIsEditing={setIsEditing}
              setTodos={setTodos}
              projects={projects}
            />
          );
        })}
      </div>
      <button onClick={() => toggleVisibility(false)}>
        {showProjectForm ? "x" : "+"}
      </button>
      {showProjectForm && <ProjectForm setProjects={setProjects} />}
    </>
  );
}

export default App;
