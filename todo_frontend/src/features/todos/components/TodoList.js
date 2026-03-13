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
  return (
    <div>
      {!todos.length ? <p className="rt-empty">{emptyMessage}</p> : null}
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
    </div>
  );
}

export default TodoList;
