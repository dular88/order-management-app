"use client";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="container">
      <h1>🛒 Cart</h1>

      {cart.map(i => (
        <p key={i.id}>
          {i.name} × {i.qty}
        </p>
      ))}

      <Link href="/checkout">
        <button disabled={!cart.length}>Checkout</button>
      </Link>
    </main>
  );
}
