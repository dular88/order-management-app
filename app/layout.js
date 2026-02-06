import "./globals.css";
import ReactQueryProvider from "../lib/reactQueryProvider";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
