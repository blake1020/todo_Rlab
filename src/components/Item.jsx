import React, { useRef } from "react";
import { useState } from "react";

function Item({ item, onToggleItem, onDeleteItem, onSaveEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.title);
  function handleToggleItem() {
    onToggleItem(item.id);
  }

  function handleDeleteItem() {
    onDeleteItem(item.id);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  const handleEdit = () => {
    console.log(text);
    // const newItem = item;
    // newItem.title = inputText;
    // handleSaveEdit(item);
    onSaveEdit(item.id, text);
    setIsEditing(!isEditing);
  };
  return (
    <li>
      {/* false */}
      {!isEditing ? (
        <>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={handleToggleItem}
          />
          <span
            style={item.completed ? { textDecoration: "line-through" } : {}}
          >
            {item.title}
          </span>
          <button
            onClick={() => {
              // isEditing = true
              setIsEditing(!isEditing);
            }}
          >
            ✏️
          </button>
          <button onClick={handleDeleteItem}>✖️</button>
        </>
      ) : (
        <>
          <input
            text="text"
            value={text}
            // ref={inputText}
            onChange={handleChange}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      )}
    </li>
  );
}

export default Item;