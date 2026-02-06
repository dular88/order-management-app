export async function POST(req) {
  const body = await req.json();
  const id = Date.now();

  return new Response(JSON.stringify({ orderId: id }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
