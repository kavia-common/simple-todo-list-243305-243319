import React from "react";
import TodoItem from "./TodoItem";

// PUBLIC_INTERFACE
function TodoList({
  todos,
  onToggle,
  onDelete,
  emptyMessage = "No todos yet. Add one above.",
  ariaLabel = "Todo list",
}) {
  /** Renders a list (empty state included). */
  if (!todos.length) {
    return <p className="rt-empty">{emptyMessage}</p>;
  }

  return (
    <ul className="rt-list" aria-label={ariaLabel}>
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
