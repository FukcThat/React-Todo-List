import { useState } from "react";

export default function EditingTodoContainer({
  todo,
  toggleDone,
  deleteTodo,
  setIsEditing,
  setTodos,
}) {
  const [formState, setFormState] = useState({ title: todo.title });

  const submitEditForm = () => {
    setTodos((oldTasks) => {
      return oldTasks.map((task) => {
        if (task.title == todo.title) {
          task.title = formState.title;
        }
        return task;
      });
    });

    setIsEditing(null);
  };

  return (
    <div key={todo.title + todo.description} className="todo-container">
      <input
        type="text"
        value={formState.title}
        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
      />
      <button
        onClick={() => toggleDone(todo.title)}
        className="todo--isDone-btn"
      >
        {todo.isDone ? "Done" : "Not done"}
      </button>
      <p>{todo.description}</p>
      <button onClick={() => deleteTodo(todo.title)}>🗑️</button>
      <p>{todo.priorityType}</p>
      <button onClick={submitEditForm}>✏️</button>
      <p className="justify-self-end">
        {todo.dueDate ? "Due on:  " + todo.dueDate : "No DueDate"}
      </p>
    </div>
  );
}
