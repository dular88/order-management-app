import OrderStatusClient from "./OrderStatusClient";

export default function OrderStatusPage({ params }) {
  return (
    <div style={{ padding: 30 }}>
      <h1>Order #{params.id}</h1>
      <OrderStatusClient id={params.id} />
    </div>
  );
}
