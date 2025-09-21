import { useState } from "react";
import { dummyTodoArray } from "./DummyTodos";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState(dummyTodoArray);

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
      <TodoForm setTodos={setTodos} />
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.title + todo.description}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>{todo.isDone ? "Done" : "Not done"}</p>
              <button onClick={() => toggleDone(todo.title)}>
                Toggle Done
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
