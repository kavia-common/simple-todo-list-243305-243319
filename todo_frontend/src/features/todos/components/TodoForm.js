import React, { useId, useState } from "react";

// PUBLIC_INTERFACE
function TodoForm({
  onAdd,
  label = "New todo",
  placeholder = "What do you need to do?",
  helpText,
  buttonText = "Add",
  autoFocus = false,
  disabled = false,
}) {
  /** Form to add a new item (defaults to todo copy). */
  const inputId = useId();
  const helpId = useId();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) return;

    const trimmed = text.trim();
    if (!trimmed) return;

    onAdd(trimmed);
    setText("");
  };

  const isEmpty = !text.trim();
  const isSubmitDisabled = disabled || isEmpty;

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
          disabled={disabled}
          aria-describedby={helpText ? helpId : undefined}
        />
        <button className="rt-btn" type="submit" disabled={isSubmitDisabled}>
          {buttonText}
        </button>
      </div>

      {helpText ? (
        <p className="rt-help" id={helpId}>
          {helpText}
        </p>
      ) : null}
    </form>
  );
}

export default TodoForm;
