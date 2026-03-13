import React, { useMemo, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "../../../styles/todos.css";

let nextId = 3;

const INITIAL_TODOS = [
  { id: 1, text: "Add your first todo", completed: false },
  { id: 2, text: "Mark it complete", completed: true },
];

function createTodo(text) {
  return { id: nextId++, text, completed: false };
}

function getStats(todos) {
  const remaining = todos.reduce((acc, t) => acc + (t.completed ? 0 : 1), 0);
  return { remaining, total: todos.length };
}

// PUBLIC_INTERFACE
function TodoPage() {
  /** Page container for the Todo feature: holds local todo state and renders UI. */
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const stats = useMemo(() => getStats(todos), [todos]);

  // PUBLIC_INTERFACE
  const addTodo = (text) => {
    /** Add a new todo with the provided text. */
    setTodos((prev) => [createTodo(text), ...prev]);
  };

  // PUBLIC_INTERFACE
  const toggleTodo = (id) => {
    /** Toggle completed state of a todo by id. */
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    /** Delete a todo by id. */
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="rt-page">
      <header className="rt-header">
        <div>
          <h1 className="rt-title">Todo List</h1>
          <p className="rt-subtitle">
            A tiny scaffold: add, complete, delete.
          </p>
        </div>

        <div className="rt-badges" aria-label="Todo statistics">
          <span className="rt-badge" title="Remaining">
            Remaining: <strong>{stats.remaining}</strong>
          </span>
          <span className="rt-badge" title="Total">
            Total: <strong>{stats.total}</strong>
          </span>
        </div>
      </header>

      <main className="rt-card">
        <TodoForm onAdd={addTodo} autoFocus />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>

      <footer className="rt-footer">
        <small>Tip: Press Enter to add a todo.</small>
      </footer>
    </div>
  );
}

export default TodoPage;
