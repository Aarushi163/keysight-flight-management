function PriceInfo(props) {
  return (
    <div>
      <h3>Price Information</h3>
      <p>Ticket Price: ₹{props.ticketPrice}</p>
    </div>
  );
}

export default PriceInfo;
