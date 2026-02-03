import FlightInfo from "./FlightInfo";

function App() {
  const flightDetails = {
    airlineName: "Air India",
    airlineCode: "AI-202",
    seats: 180,
    source: "Delhi",
    destination: "Mumbai",
    ticketPrice: 5500,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Single Flight Details</h1>

      <FlightInfo
        airlineName={flightDetails.airlineName}
        airlineCode={flightDetails.airlineCode}
        seats={flightDetails.seats}
        source={flightDetails.source}
        destination={flightDetails.destination}
        ticketPrice={flightDetails.ticketPrice}
      />
    </div>
  );
}

export default App;
