"use client";
import { useCart } from "../context/CartContext";

export default function MenuItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="card">
      <img src={item.image} width="150" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <strong>₹{item.price}</strong>
      <br />
      <button onClick={() => dispatch({ type: "ADD", item })}>
        Add to Cart
      </button>
    </div>
  );
}
