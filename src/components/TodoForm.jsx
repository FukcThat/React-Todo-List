import { useEffect, useState } from "react";
import { Todo } from "../lib/Todo";
import { priorityTypes } from "../lib/data";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

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
      <TextInput
        type="text"
        value={formInputs.title}
        onChange={(e) =>
          setFormInputs({ ...formInputs, title: e.target.value })
        }
        label="Task"
        isForm={true}
      />

      <TextInput
        type="text"
        value={formInputs.description}
        onChange={(e) =>
          setFormInputs({ ...formInputs, description: e.target.value })
        }
        label="Notes"
        isForm={true}
      />

      <TextInput
        value={formInputs.dueDate}
        onChange={(e) =>
          setFormInputs({ ...formInputs, dueDate: e.target.value })
        }
        type={"date"}
        isForm={true}
        label="Due Date"
      />

      <SelectInput
        value={formInputs.priority}
        onChange={(e) =>
          setFormInputs({ ...formInputs, priority: e.target.value })
        }
        options={priorityTypes}
        label={"Priority Type"}
      />

      <button type="submit" className="todo-form--submit-btn">
        Okay, done!
      </button>
    </form>
  );
}
