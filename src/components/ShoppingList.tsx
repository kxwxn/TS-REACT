import React from "react";
import Item from "../models/item";

interface PropsType {
  items: Item[];
}

export default function ShoppingList({ items }: PropsType): JSX.Element {
  const products = items.map((i) => {
    return (
      <li key={i.id}>
        {i.product}- quantity:{i.quantity}
      </li>
    );
  });

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>{products}</ul>
    </div>
  );
}
