export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  const encoder = new TextEncoder();

  const statuses = [
    "Order placed",
    "Preparing",
    "Cooking",
    "Out for delivery",
    "Delivered",
  ];

  let i = 0;

  const stream = new ReadableStream({
    async start(controller) {
      const push = async () => {
        if (i >= statuses.length) {
          controller.close();
          return;
        }

        controller.enqueue(
          encoder.encode(`data: ${statuses[i++]}\n\n`)
        );

        await new Promise(r => setTimeout(r, 1500));
        await push();
      };

      await push();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
