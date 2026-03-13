import React from "react";
import TodoItem from "./TodoItem";

// PUBLIC_INTERFACE
function TodoList({ todos, onToggle, onDelete }) {
  /** Renders a list of todos (empty state included). */
  if (!todos.length) {
    return <p className="rt-empty">No todos yet. Add one above.</p>;
  }

  return (
    <ul className="rt-list" aria-label="Todo list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
