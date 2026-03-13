import React from "react";

// PUBLIC_INTERFACE
function TodoItem({ todo, onToggle, onDelete }) {
  /** Single todo row with checkbox and delete control. */
  return (
    <li className="rt-item">
      <label className="rt-itemMain">
        <input
          className="rt-checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark "${todo.text}" as ${
            todo.completed ? "incomplete" : "complete"
          }`}
        />
        <span className={todo.completed ? "rt-itemText is-done" : "rt-itemText"}>
          {todo.text}
        </span>
      </label>

      <button
        className="rt-iconBtn"
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${todo.text}"`}
        title="Delete"
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;
