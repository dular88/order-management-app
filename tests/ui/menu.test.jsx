import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "@/app/page";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("Menu Page", () => {
  it("renders menu heading", async () => {
    render(<HomePage />, { wrapper: createWrapper() });

    expect(await screen.findByText(/menu/i)).toBeInTheDocument();
  });
});
