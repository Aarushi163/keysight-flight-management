import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Flights from "./pages/Flights";
import Passenger from "./pages/Passenger";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/passenger" element={<Passenger />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />

      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
