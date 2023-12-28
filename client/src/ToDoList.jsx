import React, { useState } from "react";
import "./index.css";

function ToDoList() {
  const [items, setItems] = useState(["California"]);
  const [newItem, setNewItem] = useState("");

  function handleInputChange(event) {
    setNewItem(event.target.value);
  }
  function addItem() {
    setItems((i) => [...i, newItem]);
    setNewItem("");
  }

  return (
    <>
      <div className="container">
        <div className="flex-container-column">
          <div className="flex-container-row">
            <input type="text" onChange={handleInputChange} value={newItem} />
            <button onClick={addItem}>ADD</button>
          </div>
          <div className="items">
            <ol>
              <div className="items">
                <ol>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
