import React from "react";
import Item from "./Item.jsx";
function handleChange(e) {
  setText(e.target.value);
}
function TodoList({ items, onToggleItem, onDeleteItem, onSaveEdit }) {
  console.log(items);
  return (
    <div>
      <h1>React Js ToDo List</h1>
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
              onSaveEdit={onSaveEdit}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
