import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const qtyInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    const quantity = parseInt(qtyInputRef.current!.value);
    onAddItem(newProduct, quantity);
    productInputRef.current!.value = "";
    qtyInputRef.current!.value = "1";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} placeholder={"Product Name"} ref={productInputRef} />
      <input type={"number"} min={1} ref={qtyInputRef} />
      <button type={"submit"}>Add Item</button>
    </form>
  );
}
