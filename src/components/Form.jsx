import React from "react";
import { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.value)
    if (!title) return;
    const newItem = {
      userId: 1,
      id: Date.now(), //get random non repeating number
      title,
      completed: false,
    };
    // console.log(newItem);
    onAddItem(newItem);
    setTitle("");
  }
  function handleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>What do you need to do? </h2>
      <input
        value={title}
        type="text"
        placeholder="Add item"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="add-button">Add</button>
    </form>
  );
}

export default Form;