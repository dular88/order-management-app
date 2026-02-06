"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MenuItem from "../components/MenuItem";
import Link from "next/link";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["menu"],
    queryFn: () => axios.get("/api/menu").then((r) => r.data),
  });

  return (
    <main className="container">
      <h1>🍕 Food Menu</h1>

      <Link href="/cart">🛒 Go to Cart</Link>

      <div className="grid">
        {data?.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
