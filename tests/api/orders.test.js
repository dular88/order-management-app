import { POST } from "@/app/api/orders/route";

describe("POST /api/orders", () => {
  it("should create order", async () => {
    const req = {
      json: async () => ({
        items: [{ id: 1, qty: 2 }],
        customer: { name: "Dinesh" },
      }),
    };

    const res = await POST(req);
    expect(res.status).toBe(201);
  });
});
