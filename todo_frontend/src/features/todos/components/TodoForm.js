import React, { useId, useState } from "react";

// PUBLIC_INTERFACE
function TodoForm({
  onAdd,
  label = "New todo",
  placeholder = "What do you need to do?",
  buttonText = "Add",
  autoFocus = false,
}) {
  /** Form to add a new item (defaults to todo copy). */
  const inputId = useId();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  const isEmpty = !text.trim();

  return (
    <form className="rt-form" onSubmit={handleSubmit}>
      <label className="rt-label" htmlFor={inputId}>
        {label}
      </label>

      <div className="rt-formRow">
        <input
          id={inputId}
          className="rt-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          autoFocus={autoFocus}
        />
        <button className="rt-btn" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
