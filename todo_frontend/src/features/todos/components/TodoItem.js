import React from "react";

// PUBLIC_INTERFACE
function TodoItem({
  todo,
  onToggle,
  onDelete,
  getLabel = (t) => t.text,
  getCompleted = (t) => t.completed,
}) {
  /** Single row with checkbox + delete control (defaults to todo shape). */
  const label = getLabel(todo);
  const completed = getCompleted(todo);

  return (
    <li className="rt-item">
      <label className="rt-itemMain">
        <input
          className="rt-checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark "${label}" as ${completed ? "incomplete" : "complete"}`}
        />
        <span className={completed ? "rt-itemText is-done" : "rt-itemText"}>
          {label}
        </span>
      </label>

      <button
        className="rt-iconBtn"
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${label}"`}
        title="Delete"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
