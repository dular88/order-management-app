"use client";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function Checkout() {
  const { cart, dispatch } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function placeOrder() {
    setLoading(true);
    const res = await axios.post("/api/orders", {
      items: cart,
      customer: { name: "Guest", phone: "9999999999" },
    });

    dispatch({ type: "CLEAR" });
    router.push(`/order/${res.data.orderId}`);
  }

  return (
    <main className="container">
      <h1>Checkout</h1>
      <button onClick={placeOrder} disabled={loading}>
        Place Order
      </button>
    </main>
  );
}
