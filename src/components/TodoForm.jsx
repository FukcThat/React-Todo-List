import { useEffect, useState } from "react";
import { Todo } from "../lib/Todo";
import { priorityTypes } from "../lib/data";

const defaultFormInputs = {
  title: "",
  description: "",
  dueDate: "",
  priority: "",
};

export default function TodoForm({ setTodos }) {
  const [formInputs, setFormInputs] = useState(defaultFormInputs);

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    if (formInputs.title == "" || formInputs.description == "") return;

    const newTodo = new Todo(
      formInputs.title,
      formInputs.description,
      formInputs.dueDate,
      formInputs.priority
    );
    setTodos((oldTodos) => [...oldTodos, newTodo]);

    setFormInputs(defaultFormInputs);
  };

  return (
    <form onSubmit={SubmitForm} className="todo-form">
      <div className="todo-form--input-group">
        <label>Todo</label>
        <input
          type="text"
          value={formInputs.title}
          placeholder="What do you want do do?"
          onChange={(e) =>
            setFormInputs({ ...formInputs, title: e.target.value })
          }
        />
      </div>
      <div className="todo-form--input-group">
        <label>Notes</label>
        <input
          type="text"
          value={formInputs.description}
          placeholder="Anything important to remember?"
          onChange={(e) =>
            setFormInputs({ ...formInputs, description: e.target.value })
          }
        />
      </div>
      <div className="todo-form--input-group">
        <label>Due Date</label>
        <input
          type="date"
          value={formInputs.dueDate}
          onChange={(e) =>
            setFormInputs({ ...formInputs, dueDate: e.target.value })
          }
        />
      </div>

      <div className="todo-form--input-group">
        <label>Priority Type</label>
        <select
          value={formInputs.priority}
          onChange={(e) =>
            setFormInputs({ ...formInputs, priority: e.target.value })
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
      </div>

      <button type="submit" className="todo-form--submit-btn">
        Okay, done!
      </button>
    </form>
  );
}
