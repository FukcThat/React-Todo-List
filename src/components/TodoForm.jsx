import { useState } from "react";
import { Todo } from "../lib/Todo";

export default function TodoForm({ setTodos }) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    if (titleInput == "" || descriptionInput == "") return;

    const newTodo = new Todo(titleInput, descriptionInput);
    setTodos((oldTodos) => [...oldTodos, newTodo]);

    setTitleInput("");
    setDescriptionInput("");
  };

  return (
    <form onSubmit={SubmitForm}>
      <div>
        <label>Todo</label>
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </div>
      <div>
        <label>Notes</label>
        <input
          type="text"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
