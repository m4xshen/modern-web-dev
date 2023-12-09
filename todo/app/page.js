function Todo({ todo }) {
  return (
    <div className={`horizon-card todo ${todo.done ? 'finished' : ''}`}>
      <button className="checkbox"></button>
      <div className="name">{todo.name}</div>
    </div>
  )
}

export default function Home() {
  const todos = [
    {
      name: "Calculus HW2",
      done: false,
    },
    {
      name: "Side Project Figma",
      done: false,
    },
    {
      name: "Course Slide",
      done: false,
    },
    {
      name: "Write Blog Post",
      done: true,
    },
    {
      name: "Test",
      done: true,
    },
  ];

  return (
    <div className="card">
      <div className="title">TODO</div>
      <div className="horizon-card todo-creator">
        <button className="checkbox add-button">+</button>
        <input
          type="text"
          className="input"
          placeholder="Create a new todo ..."
        />
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
}
