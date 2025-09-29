import { useEffect, useMemo, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import EditingTodoContainer from "./components/EditingTodoContainer";
import ProjectForm from "./components/ProjectForm";
import ProjectNavBar from "./components/ProjectNavBar";
import { useGlobal } from "./context/Context";

function App() {
  const { todos, setTodos, projects, setProjects, activeProject, isEditing } =
    useGlobal();

  const [showTodoForm, setShowTodoForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      activeProject == "" ? true : activeProject == todo.projectId
    );
  }, [activeProject, todos]);

  const toggleVisibility = (isTodo = true) => {
    if (isTodo) {
      setShowTodoForm((isOpen) => !isOpen);
    } else {
      setShowProjectForm((isOpen) => !isOpen);
    }
  };

  return (
    <>
      <ProjectNavBar />
      <button onClick={toggleVisibility}>{showTodoForm ? "x" : "+"}</button>
      {showTodoForm && <TodoForm setTodos={setTodos} projects={projects} />}
      <div>
        {filteredTodos.map((todo) => {
          return todo.title !== isEditing ? (
            <TodoContainer key={todo.title} todo={todo} />
          ) : (
            <EditingTodoContainer key={todo.title} todo={todo} />
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
