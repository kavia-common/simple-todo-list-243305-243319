import React, { useMemo, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "../../../styles/todos.css";

let nextId = 3;

const INITIAL_TODOS = [
  { id: 1, text: "Add your first todo", completed: false },
  { id: 2, text: "Mark it complete", completed: true },
];

// PUBLIC_INTERFACE
function TodoPage() {
  /** Page container for the Todo feature: holds local todo state and renders UI. */
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  const totalCount = todos.length;

  // PUBLIC_INTERFACE
  const addTodo = (text) => {
    /** Add a new todo with the provided text. */
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodo = {
      id: nextId++,
      text: trimmed,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
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
            Remaining: <strong>{remainingCount}</strong>
          </span>
          <span className="rt-badge" title="Total">
            Total: <strong>{totalCount}</strong>
          </span>
        </div>
      </header>

      <main className="rt-card">
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>

      <footer className="rt-footer">
        <small>Tip: Press Enter to add a todo.</small>
      </footer>
    </div>
  );
}

export default TodoPage;
