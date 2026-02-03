import { Link, useLocation } from "react-router-dom";
import "./../styles/App.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="logo-dot"></span>
        SkyLine Flights
      </div>

      <div className="nav-links">
        <Link className={location.pathname === "/flights" ? "active" : ""} to="/flights">
          Flights
        </Link>

        <Link className={location.pathname === "/passenger" ? "active" : ""} to="/passenger">
          Passenger
        </Link>

        <Link className={location.pathname === "/payment" ? "active" : ""} to="/payment">
          Payment
        </Link>

        <Link
          className={location.pathname === "/confirmation" ? "active" : ""}
          to="/confirmation"
        >
          Ticket
        </Link>
      </div>

      <div className="nav-actions">
        <Link className="btn-outline" to="/admin">
          Admin
        </Link>
      </div>
    </nav>
  );
}
