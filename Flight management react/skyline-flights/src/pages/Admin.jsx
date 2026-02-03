import { useState, useEffect } from "react";
import { addFlight, getFlights } from "../services/flightApi";
import "../styles/Admin.css";

export default function Admin() {
  const [flights, setFlights] = useState([]);
  const [newFlight, setNewFlight] = useState({
    airline: "",
    from: "",
    to: "",
    departure: "",
    duration: "",
    price: "",
  });

  useEffect(() => {
    getFlights().then(res => setFlights(res.data));
  }, []);

  const handleAdd = async () => {
    await addFlight(newFlight);
    const res = await getFlights();
    setFlights(res.data);
    setNewFlight({ airline: "", from: "", to: "", departure: "", duration: "", price: "" });
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>

      <div className="admin-form">
        <input placeholder="Airline" value={newFlight.airline} onChange={e => setNewFlight({ ...newFlight, airline: e.target.value })} />
        <input placeholder="From" value={newFlight.from} onChange={e => setNewFlight({ ...newFlight, from: e.target.value })} />
        <input placeholder="To" value={newFlight.to} onChange={e => setNewFlight({ ...newFlight, to: e.target.value })} />
        <input placeholder="Departure" value={newFlight.departure} onChange={e => setNewFlight({ ...newFlight, departure: e.target.value })} />
        <input placeholder="Duration" value={newFlight.duration} onChange={e => setNewFlight({ ...newFlight, duration: e.target.value })} />
        <input placeholder="Price" type="number" value={newFlight.price} onChange={e => setNewFlight({ ...newFlight, price: e.target.value })} />
        <button onClick={handleAdd}>Add Flight</button>
      </div>

      <h3>Existing Flights</h3>
      <div className="admin-flights">
        {flights.map(f => (
          <div key={f.id} className="flight-card">
            <p>{f.airline}: {f.from} → {f.to}</p>
            <p>Departure: {f.departure} | Duration: {f.duration} | ₹{f.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
