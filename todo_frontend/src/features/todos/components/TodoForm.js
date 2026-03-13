import React, { useId, useState } from "react";

// PUBLIC_INTERFACE
function TodoForm({ onAdd }) {
  /** Form to add a new todo item. */
  const inputId = useId();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form className="rt-form" onSubmit={handleSubmit}>
      <label className="rt-label" htmlFor={inputId}>
        New todo
      </label>

      <div className="rt-formRow">
        <input
          id={inputId}
          className="rt-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What do you need to do?"
          autoComplete="off"
        />
        <button className="rt-btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
