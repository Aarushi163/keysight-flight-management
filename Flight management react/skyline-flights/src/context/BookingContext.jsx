import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [flight, setFlight] = useState(null);
  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    seat: "",
  });
  const [payment, setPayment] = useState({
    method: "",
    details: {},
  });

  return (
    <BookingContext.Provider
      value={{ flight, setFlight, passenger, setPassenger, payment, setPayment }}
    >
      {children}
    </BookingContext.Provider>
  );
};
