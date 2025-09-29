import { useState } from "react";
import { priorityTypes } from "../lib/data";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { useGlobal } from "../context/Context";

export default function EditingTodoContainer({ todo }) {
  const { toggleDone, deleteTodo, setIsEditing, setTodos, projects } =
    useGlobal();

  const [formState, setFormState] = useState({
    title: todo.title,
    description: todo.description,
    priority: todo.priorityType,
    date: todo.dueDate ? todo.dueDate : new Date().toISOString(),
    projectId: todo.projectId,
  });

  const submitEditForm = () => {
    setTodos((oldTasks) => {
      return oldTasks.map((task) => {
        if (task.title == todo.title) {
          task.title = formState.title;
          task.description = formState.description;
          task.priorityType = formState.priority;
          task.dueDate = formState.date;
          task.projectId = formState.projectId;
        }
        return task;
      });
    });

    setIsEditing(null);
  };

  return (
    <div key={todo.title + todo.description} className="todo-container">
      <TextInput
        type={"text"}
        value={formState.title}
        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
      />
      <button
        onClick={() => toggleDone(todo.title)}
        className="todo--isDone-btn"
      >
        {todo.isDone ? "Done" : "Not done"}
      </button>
      <TextInput
        type="text"
        value={formState.description}
        onChange={(e) =>
          setFormState({ ...formState, description: e.target.value })
        }
      />
      <button onClick={() => deleteTodo(todo.title)}>🗑️</button>
      <p>{todo.priorityType}</p>

      <SelectInput
        value={formState.priority}
        onChange={(e) =>
          setFormState({ ...formState, priority: e.target.value })
        }
        options={priorityTypes.map((type) => {
          return {
            key: type,
            value: type,
          };
        })}
        isForm={false}
      />

      <SelectInput
        value={formState.projectId}
        onChange={(e) =>
          setFormState({ ...formState, projectId: e.target.value })
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
        isForm={false}
      />

      <button onClick={submitEditForm}>✏️</button>
      <p className="justify-self-end">
        {todo.dueDate ? "Due on:  " + todo.dueDate : "No DueDate"}
      </p>

      <TextInput
        value={formState.date}
        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
        type={"date"}
      />
    </div>
  );
}
