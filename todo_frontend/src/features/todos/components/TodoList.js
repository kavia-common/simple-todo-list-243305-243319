import React from "react";
import TodoItem from "./TodoItem";

function LoadingRow({ i }) {
  return (
    <li className="rt-item rt-item--loading" aria-hidden="true">
      <div className="rt-itemMain">
        <span className="rt-skel rt-skel--box" />
        <span className="rt-skel rt-skel--line" style={{ width: `${62 + i * 6}%` }} />
      </div>
      <span className="rt-skel rt-skel--pill" />
    </li>
  );
}

// PUBLIC_INTERFACE
function TodoList({
  todos,
  onToggle,
  onDelete,
  emptyMessage = "No todos yet. Add one above.",
  ariaLabel = "Todo list",
  isLoading = false,
}) {
  /** Renders a list (empty state included). */
  const showEmpty = !isLoading && !todos.length;

  return (
    <div>
      {showEmpty ? <p className="rt-empty">{emptyMessage}</p> : null}

      <ul className="rt-list" aria-label={ariaLabel} aria-live="polite">
        {isLoading ? (
          <>
            <LoadingRow i={0} />
            <LoadingRow i={1} />
            <LoadingRow i={2} />
          </>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>

      {isLoading ? (
        <p className="rt-empty" style={{ marginTop: 10 }}>
          Loading your list…
        </p>
      ) : null}
    </div>
  );
}

export default TodoList;
