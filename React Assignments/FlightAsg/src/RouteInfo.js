function RouteInfo(props) {
  return (
    <div>
      <h3>Route Information</h3>
      <p>Source City: {props.source}</p>
      <p>Destination City: {props.destination}</p>
    </div>
  );
}

export default RouteInfo;
