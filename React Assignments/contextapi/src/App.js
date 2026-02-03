import { createContext, useContext, useState } from "react";

/* 1️⃣ Create Context */
const ProductContext = createContext();

/* 2️⃣ Price Component */
function PriceComp() {
  const { price } = useContext(ProductContext);

  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h3>PriceComp</h3>
      <p>prodPrice = {price}</p>
    </div>
  );
}

/* 3️⃣ Discount Component */
function DiscountComp() {
  const { discount } = useContext(ProductContext);

  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h3>DiscountComp</h3>
      <p>disc = {discount}%</p>
    </div>
  );
}

/* 4️⃣ AppComp (Calculation Component) */
function AppComp() {
  const { price, discount } = useContext(ProductContext);

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        marginTop: "20px"
      }}
    >
      <h3>AppComp</h3>
      <p>Actual Price: {price}</p>
      <p>Discount Given: {discountAmount}</p>
      <p>Discounted Price: {finalPrice}</p>
    </div>
  );
}

/* 5️⃣ Main App Component */
export default function App() {
  const [price] = useState(4000);
  const [discount] = useState(30);

  return (
    <ProductContext.Provider value={{ price, discount }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <PriceComp />
        <DiscountComp />
      </div>
      <AppComp />
    </ProductContext.Provider>
  );
}

