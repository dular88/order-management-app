"use client";

import { useEffect, useRef, useState } from "react";

export default function OrderStatusClient({ id }) {
  const [status, setStatus] = useState("Connecting...");
  const evtRef = useRef(null);

  useEffect(() => {
    if (evtRef.current) return;

    const evt = new EventSource(`/api/orders/${id}/status`);
    evtRef.current = evt;

    evt.onmessage = (e) => setStatus(e.data);

    evt.onerror = () => {
      evt.close();
      evtRef.current = null;
    };

    return () => {
      evt.close();
      evtRef.current = null;
    };
  }, [id]);

  return (
    <div>
      <h2>Live Order Status</h2>
      <h1>{status}</h1>
    </div>
  );
}
