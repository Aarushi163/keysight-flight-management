import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import "../styles/Flights.css";

export default function Flights() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("priceLow");
  const [maxPrice, setMaxPrice] = useState(15000);

  const flights = [
    {
      id: 1,
      airline: "IndiGo",
      flightNo: "6E-245",
      from: "Delhi",
      to: "Mumbai",
      dep: "08:30 AM",
      arr: "10:50 AM",
      duration: "2h 20m",
      price: 5499,
      seats: 6,
    },
    {
      id: 2,
      airline: "Air India",
      flightNo: "AI-101",
      from: "Delhi",
      to: "Bengaluru",
      dep: "11:10 AM",
      arr: "01:55 PM",
      duration: "2h 45m",
      price: 6999,
      seats: 3,
    },
    {
      id: 3,
      airline: "SpiceJet",
      flightNo: "SG-440",
      from: "Mumbai",
      to: "Goa",
      dep: "06:15 PM",
      arr: "07:25 PM",
      duration: "1h 10m",
      price: 3299,
      seats: 12,
    },
    {
      id: 4,
      airline: "Vistara",
      flightNo: "UK-820",
      from: "Delhi",
      to: "Kolkata",
      dep: "07:00 AM",
      arr: "09:05 AM",
      duration: "2h 05m",
      price: 7999,
      seats: 2,
    },
  ];

  const filteredFlights = useMemo(() => {
    let list = flights.filter((f) => {
      const text = `${f.airline} ${f.flightNo} ${f.from} ${f.to}`.toLowerCase();
      return text.includes(search.toLowerCase()) && f.price <= maxPrice;
    });

    if (sortBy === "az") list.sort((a, b) => a.airline.localeCompare(b.airline));
    if (sortBy === "priceLow") list.sort((a, b) => a.price - b.price);
    if (sortBy === "seatsHigh") list.sort((a, b) => b.seats - a.seats);

    return list;
  }, [search, sortBy, maxPrice]);

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div className="page-header">
          <h1>Flights Dashboard ✈️</h1>
          <p>Search, filter and book flights in seconds.</p>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by airline, flight number, source or destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="priceLow">Sort: Lowest Price</option>
            <option value="az">Sort: Airline A-Z</option>
            <option value="seatsHigh">Sort: Seats (High-Low)</option>
          </select>
        </div>

        <div className="grid">
          <div className="filter-card">
            <h3>Filters</h3>

            <div className="filter-item">
              <label>Max Price: ₹{maxPrice}</label>
              <input
                type="range"
                min="2000"
                max="15000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>

            <div className="filter-badges">
              <span className="badge">Fast Booking</span>
              <span className="badge">Trusted Payments</span>
              <span className="badge">Instant Ticket</span>
            </div>
          </div>

          <div className="flight-list">
            {filteredFlights.length === 0 ? (
              <div className="empty-state">
                <h2>No flights found 😢</h2>
                <p>Try changing filters or search keyword.</p>
              </div>
            ) : (
              filteredFlights.map((flight) => (
                <div className="flight-card" key={flight.id}>
                  <div className="flight-top">
                    <div>
                      <h2>{flight.airline}</h2>
                      <p className="muted">{flight.flightNo}</p>
                    </div>

                    <div
                      className={
                        flight.seats <= 3 ? "seats-badge danger" : "seats-badge"
                      }
                    >
                      {flight.seats} seats left
                    </div>
                  </div>

                  <div className="route">
                    <div className="route-box">
                      <span className="label">From</span>
                      <h3>{flight.from}</h3>
                      <p>{flight.dep}</p>
                    </div>

                    <div className="route-mid">
                      <div className="line"></div>
                      <span className="duration">{flight.duration}</span>
                    </div>

                    <div className="route-box">
                      <span className="label">To</span>
                      <h3>{flight.to}</h3>
                      <p>{flight.arr}</p>
                    </div>
                  </div>

                  <div className="flight-bottom">
                    <div>
                      <span className="price">₹{flight.price}</span>
                      <p className="muted">includes taxes</p>
                    </div>

                    <button
                      className="btn-primary"
                      onClick={() => navigate("/passenger")}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
