import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
