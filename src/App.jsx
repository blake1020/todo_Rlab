import Heading from "./components/Heading";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

const initialState = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

function App() {
  const [items, setItems] = useState(initialState);

  const handleSaveEdit = (thisItemid, newItem) => {
    setItems(
      items.map((item) =>
        item.id == thisItemid ? { ...item, title: newItem } : item
      )
    );
    console.log(items, thisItemid, newItem);
    // return;
  };

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleToggleItem(id) {
    // console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Form onAddItem={handleAddItems} />
      <ToDoList
        setItems={setItems}
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onSaveEdit={handleSaveEdit}
      />
    </>
  );
}

export default App;