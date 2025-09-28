import { useState } from "react";
import { Todo } from "../lib/Todo";
import { priorityTypes } from "../lib/data";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

const defaultFormInputs = {
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  projectId: "",
};

export default function TodoForm({ setTodos, projects }) {
  const [formInputs, setFormInputs] = useState(defaultFormInputs);

  const SubmitForm = (e) => {
    e.preventDefault();

    if (formInputs.title == "" || formInputs.description == "") return;

    const newTodo = new Todo(
      formInputs.title,
      formInputs.description,
      formInputs.dueDate,
      formInputs.priority,
      formInputs.projectId
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
        options={priorityTypes.map((type) => {
          return {
            key: type,
            value: type,
          };
        })}
        label={"Priority Type"}
      />

      <SelectInput
        value={formInputs.projectId}
        onChange={(e) =>
          setFormInputs({ ...formInputs, projectId: e.target.value })
        }
        options={[
          { key: "", value: "None" },
          ...projects.map((project) => {
            return {
              key: project.id,
              value: project.name,
            };
          }),
        ]}
        label="Project"
      />

      <button type="submit" className="todo-form--submit-btn">
        Okay, done!
      </button>
    </form>
  );
}
