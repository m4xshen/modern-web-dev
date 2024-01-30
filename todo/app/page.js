'use client';

import { useState, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    name: "Calculus HW2",
    done: false,
  },
  {
    id: 2,
    name: "Side Project Figma",
    done: false,
  },
  {
    id: 3,
    name: "Course Slide",
    done: false,
  },
  {
    id: 4,
    name: "Write Blog Post",
    done: true,
  },
  {
    id: 5,
    name: "Test",
    done: true,
  },
];

export default function Home() {
  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef(null);

  function Todo({ todo }) {
    return (
      <div className={`horizon-card todo ${todo.done ? 'finished' : ''}`}>
        <button className="checkbox" onClick={() => {
          const newTodos = todos.map((t) => {
            if (t.id === todo.id) {
              return {
                ...t,
                done: !t.done,
              }
            }
            return t;
          });
          setTodos(newTodos);
        }}></button>
        <div className="name">{todo.name}</div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="title">TODO</div>
      <div className="horizon-card todo-creator">
        <button className="checkbox add-button" onClick={() => {
          setTodos([{
            id: todos.length + 1,
            name: inputRef.current.value,
            done: false,
          }, ...todos])
          inputRef.current.value = '';
        }}>+</button>
        <input
          ref={inputRef}
          type="text"
          className="input"
          placeholder="Create a new todo ..."
        />
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
