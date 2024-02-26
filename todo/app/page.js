"use client";

import { useState, useRef, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nxgffvcnfzkghlohqncy.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    async function fetchTodos() {
      let { data: todos } = await supabase.from("todos").select("*");
      setTodos(todos);
    }
    fetchTodos();
  }, []);

  function Todo({ todo }) {
    return (
      <div className={`horizon-card todo ${todo.done ? "finished" : ""}`}>
        <button
          className="checkbox"
          onClick={async () => {
            const { data } = await supabase
              .from("todos")
              .update({ done: !todo.done })
              .eq("id", todo.id)
              .select();

            const newTodos = todos.map((t) => {
              if (t.id === todo.id) {
                return data[0];
              }
              return t;
            });
            setTodos(newTodos);
          }}
        ></button>
        <div className="name">{todo.name}</div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="title">TODO</div>
      <div className="horizon-card todo-creator">
        <button
          className="checkbox add-button"
          onClick={async () => {
            const { data } = await supabase
              .from("todos")
              .insert([{ name: inputRef.current.value, done: false }])
              .select();

            setTodos([data[0], ...todos]);
            inputRef.current.value = "";
          }}
        >
          +
        </button>
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
