import { useState } from "react";
import { dummyTodoArray } from "./DummyTodos";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState(dummyTodoArray);
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen((isOpen) => !isOpen);
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

  return (
    <>
      <button onClick={toggleVisibility}>{isOpen ? "x" : "+"}</button>
      {isOpen && <TodoForm setTodos={setTodos} />}
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.title + todo.description} className="todo-container">
              <h2>{todo.title}</h2>
              <button
                onClick={() => toggleDone(todo.title)}
                className="todo--isDone-btn"
              >
                {todo.isDone ? "Done" : "Not done"}
              </button>
              <p>{todo.description}</p>
              <p className="justify-self-end">
                {todo.dueDate ? "Due on:  " + todo.dueDate : "No DueDate"}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
