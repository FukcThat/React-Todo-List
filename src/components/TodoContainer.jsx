export default function TodoContainer({
  todo,
  toggleDone,
  deleteTodo,
  setIsEditing,
}) {
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
      <button onClick={() => deleteTodo(todo.title)}>🗑️</button>
      <p>{todo.priorityType}</p>
      <button onClick={() => setIsEditing(todo.title)}>✏️</button>
      <p className="justify-self-end">
        {todo.dueDate ? "Due on:  " + todo.dueDate : "No DueDate"}
      </p>
    </div>
  );
}
