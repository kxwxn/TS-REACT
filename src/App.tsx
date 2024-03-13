import React, { useState } from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number): void => {
    console.log("MADE TO THE APP COMPOENET!");
    setItems([...items, { id: v4(), product, quantity }]);
  };

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
