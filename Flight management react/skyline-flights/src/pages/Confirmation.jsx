import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Confirmation.css";

export default function Confirmation() {
  const bookingId = "SKY" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <div className="page-header">
          <h1>Booking Confirmed ✅</h1>
          <p>Your ticket has been generated successfully.</p>
        </div>

        <div className="ticket">
          <div className="ticket-left">
            <h2>SkyLine Flights</h2>
            <p className="muted">
              Booking ID: <b>{bookingId}</b>
            </p>

            <div className="ticket-grid">
              <div>
                <span className="label">From</span>
                <h3>Delhi</h3>
              </div>
              <div>
                <span className="label">To</span>
                <h3>Mumbai</h3>
              </div>
              <div>
                <span className="label">Flight</span>
                <h3>6E-245</h3>
              </div>
              <div>
                <span className="label">Seat</span>
                <h3>12A</h3>
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={() => alert("PDF download feature can be added ✅")}
            >
              Download Ticket
            </button>
          </div>

          <div className="ticket-right">
            <div className="status">CONFIRMED</div>
            <div className="qr-mini">QR</div>
            <p className="muted small">Show this QR at airport check-in.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
