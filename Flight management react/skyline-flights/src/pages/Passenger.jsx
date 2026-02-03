import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Passenger.css";

export default function Passenger() {
  const navigate = useNavigate();

  const [passengers, setPassengers] = useState([
    { name: "", age: "", gender: "", idNumber: "" },
  ]);

  const updatePassenger = (index, field, value) => {
    const copy = [...passengers];
    copy[index][field] = value;
    setPassengers(copy);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { name: "", age: "", gender: "", idNumber: "" }]);
  };

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div className="page-header">
          <h1>Passenger Details 👤</h1>
          <p>Enter passenger details carefully to generate correct ticket.</p>
        </div>

        <div className="passenger-wrap">
          <div className="passenger-card">
            <h2>Passenger List</h2>

            {passengers.map((p, i) => (
              <div className="passenger-form" key={i}>
                <h3>Passenger {i + 1}</h3>

                <div className="form-grid">
                  <input
                    placeholder="Full Name"
                    value={p.name}
                    onChange={(e) => updatePassenger(i, "name", e.target.value)}
                  />
                  <input
                    placeholder="Age"
                    value={p.age}
                    onChange={(e) => updatePassenger(i, "age", e.target.value)}
                  />
                  <select
                    value={p.gender}
                    onChange={(e) => updatePassenger(i, "gender", e.target.value)}
                  >
                    <option value="">Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    placeholder="Aadhar / Passport ID"
                    value={p.idNumber}
                    onChange={(e) => updatePassenger(i, "idNumber", e.target.value)}
                  />
                </div>
              </div>
            ))}

            <div className="passenger-actions">
              <button className="btn-outline" onClick={addPassenger}>
                + Add Passenger
              </button>

              <button className="btn-primary" onClick={() => navigate("/payment")}>
                Continue to Payment
              </button>
            </div>
          </div>

          <div className="summary-card">
            <h2>Booking Summary</h2>
            <p><b>Total Passengers:</b> {passengers.length}</p>
            <p><b>Fare:</b> ₹5400</p>
            <p><b>Tax:</b> ₹300</p>
            <p className="total"><b>Total:</b> ₹5700</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
