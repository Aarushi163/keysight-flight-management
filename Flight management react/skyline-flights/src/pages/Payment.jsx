import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Payment.css";

export default function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const baseFare = 5400;
  const tax = 300;

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === "SAVE100") setDiscount(100);
    else if (code === "FIRST50") setDiscount(50);
    else setDiscount(0);
  };

  const total = baseFare + tax - discount;

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div className="page-header">
          <h1>Payment 💳</h1>
          <p>Select payment method & confirm booking.</p>
        </div>

        <div className="payment-wrap">
          <div className="payment-card">
            <div className="tabs">
              <button
                className={method === "upi" ? "tab active" : "tab"}
                onClick={() => setMethod("upi")}
              >
                UPI
              </button>

              <button
                className={method === "card" ? "tab active" : "tab"}
                onClick={() => setMethod("card")}
              >
                Card
              </button>

              <button
                className={method === "net" ? "tab active" : "tab"}
                onClick={() => setMethod("net")}
              >
                NetBanking
              </button>
            </div>

            {method === "upi" && (
              <div className="pay-section">
                <h3>UPI Payment</h3>
                <div className="qr-box">QR CODE</div>
                <input placeholder="Enter UPI ID (example@upi)" />
              </div>
            )}

            {method === "card" && (
              <div className="pay-section">
                <h3>Card Payment</h3>
                <input placeholder="Card Number" />

                <div className="two">
                  <input placeholder="MM/YY" />
                  <input placeholder="CVV" />
                </div>

                <input placeholder="Card Holder Name" />
              </div>
            )}

            {method === "net" && (
              <div className="pay-section">
                <h3>NetBanking</h3>
                <select>
                  <option>Select Bank</option>
                  <option>SBI</option>
                  <option>HDFC</option>
                  <option>ICICI</option>
                  <option>Axis</option>
                </select>
              </div>
            )}
          </div>

          <div className="summary-card">
            <h2>Fare Summary</h2>

            <div className="summary-row">
              <span>Base Fare</span>
              <span>₹{baseFare}</span>
            </div>

            <div className="summary-row">
              <span>Taxes</span>
              <span>₹{tax}</span>
            </div>

            <div className="summary-row discount">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>

            <div className="coupon">
              <input
                placeholder="Coupon code (SAVE100 / FIRST50)"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="btn-outline" onClick={applyCoupon}>
                Apply
              </button>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              className="btn-primary full"
              onClick={() => navigate("/confirmation")}
            >
              Pay & Confirm
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
