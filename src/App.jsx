import { useState } from "react";
import { dummyTodoArray } from "./lib/DummyTodos";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import EditingTodoContainer from "./components/EditingTodoContainer";

function App() {
  const [todos, setTodos] = useState(dummyTodoArray);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(null);

  const [projects, setProjects] = useState([]);

  const toggleVisibility = () => setIsOpen((isOpen) => !isOpen);

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
      <button onClick={toggleVisibility}>{isOpen ? "x" : "+"}</button>
      {isOpen && <TodoForm setTodos={setTodos} />}
      <div>
        {todos.map((todo) => {
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
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
