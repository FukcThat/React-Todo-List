import { useState } from "react";
import { Todo } from "../lib/Todo";

export default function TodoForm({ setTodos }) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    if (titleInput == "" || descriptionInput == "") return;

    const newTodo = new Todo(titleInput, descriptionInput, dueDateInput);
    setTodos((oldTodos) => [...oldTodos, newTodo]);

    setTitleInput("");
    setDescriptionInput("");
    setDueDateInput("");
  };

  return (
    <form onSubmit={SubmitForm} className="todo-form">
      <div className="todo-form--input-group">
        <label>Todo</label>
        <input
          type="text"
          value={titleInput}
          placeholder="What do you want do do?"
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </div>
      <div className="todo-form--input-group">
        <label>Notes</label>
        <input
          type="text"
          value={descriptionInput}
          placeholder="Anything important to remember?"
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </div>
      <div className="todo-form--input-group">
        <label>Due Date</label>
        <input
          type="date"
          value={dueDateInput}
          onChange={(e) => setDueDateInput(e.target.value)}
        />
      </div>
      <button type="submit" className="todo-form--submit-btn">
        Okay, done!
      </button>
    </form>
  );
}
