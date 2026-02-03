import RouteInfo from "./RouteInfo";
import PriceInfo from "./PriceInfo";

function FlightInfo(props) {
  return (
    <div>
      <h2>Flight Information</h2>
      <p>Airline Name: {props.airlineName}</p>
      <p>Airline Code: {props.airlineCode}</p>
      <p>Seats Available: {props.seats}</p>

      <RouteInfo
        source={props.source}
        destination={props.destination}
      />

      <PriceInfo ticketPrice={props.ticketPrice} />
    </div>
  );
}

export default FlightInfo;
