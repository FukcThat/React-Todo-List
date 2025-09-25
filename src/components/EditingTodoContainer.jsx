import { useState } from "react";
import { priorityTypes } from "../lib/data";

export default function EditingTodoContainer({
  todo,
  toggleDone,
  deleteTodo,
  setIsEditing,
  setTodos,
}) {
  const [formState, setFormState] = useState({
    title: todo.title,
    description: todo.description,
    priority: todo.priorityType,
    date: todo.dueDate ? todo.dueDate : new Date().toISOString(),
  });

  const submitEditForm = () => {
    setTodos((oldTasks) => {
      return oldTasks.map((task) => {
        if (task.title == todo.title) {
          task.title = formState.title;
          task.description = formState.description;
          task.priorityType = formState.priority;
          task.dueDate = formState.date;
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
      <input
        type="text"
        value={formState.description}
        onChange={(e) =>
          setFormState({ ...formState, description: e.target.value })
        }
      />
      <button onClick={() => deleteTodo(todo.title)}>🗑️</button>
      <p>{todo.priorityType}</p>
      <select
        value={formState.priority}
        onChange={(e) =>
          setFormState({ ...formState, priority: e.target.value })
        }
      >
        {priorityTypes.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
      <button onClick={submitEditForm}>✏️</button>
      <p className="justify-self-end">
        {todo.dueDate ? "Due on:  " + todo.dueDate : "No DueDate"}
      </p>

      <input
        type="date"
        value={formState.date}
        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
      />
    </div>
  );
}
