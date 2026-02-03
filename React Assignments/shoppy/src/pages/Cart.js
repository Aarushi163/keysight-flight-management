import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom"; // For "Purchase More" button
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar />

      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p>Qty: {item.qty}</p>
                    <p>₹{item.price}</p>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Total: ₹{total.toFixed(2)}</h3>
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>

            {/* PURCHASE MORE BUTTON */}
            <div className="purchase-more-container">
              <Link to="/category/electronics" className="purchase-more-btn">
                Purchase More
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
