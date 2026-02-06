export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const steps = [
        "Order Received",
        "Preparing",
        "Out for Delivery",
        "Delivered",
      ];

      let i = 0;
      const timer = setInterval(() => {
        controller.enqueue(
          encoder.encode(`data: ${steps[i++]}\n\n`)
        );

        if (i === steps.length) {
          clearInterval(timer);
          controller.close();
        }
      }, 3000);
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
