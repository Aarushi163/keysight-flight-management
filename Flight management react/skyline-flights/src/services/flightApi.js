// src/services/flightApi.js

// Mock API for flights
let flights = [
  { id: 1, airline: "Air India", from: "Delhi", to: "Mumbai", departure: "06:30", arrival: "08:30", duration: "2h", price: 4500 },
  { id: 2, airline: "IndiGo", from: "Mumbai", to: "Bangalore", departure: "07:00", arrival: "09:30", duration: "2h 30m", price: 5200 },
  { id: 3, airline: "SpiceJet", from: "Chennai", to: "Delhi", departure: "08:15", arrival: "11:00", duration: "2h 45m", price: 6100 },
  { id: 4, airline: "Vistara", from: "Bangalore", to: "Mumbai", departure: "09:00", arrival: "10:30", duration: "1h 30m", price: 4700 },
  { id: 5, airline: "GoAir", from: "Kolkata", to: "Delhi", departure: "05:45", arrival: "08:15", duration: "2h 30m", price: 5000 },
  { id: 6, airline: "Air India", from: "Mumbai", to: "Chennai", departure: "11:00", arrival: "13:30", duration: "2h 30m", price: 5300 },
  { id: 7, airline: "IndiGo", from: "Delhi", to: "Bangalore", departure: "12:00", arrival: "14:45", duration: "2h 45m", price: 5800 },
  { id: 8, airline: "SpiceJet", from: "Bangalore", to: "Kolkata", departure: "14:30", arrival: "17:15", duration: "2h 45m", price: 6000 },
  { id: 9, airline: "Vistara", from: "Mumbai", to: "Delhi", departure: "15:00", arrival: "17:00", duration: "2h", price: 5500 },
  { id: 10, airline: "GoAir", from: "Chennai", to: "Mumbai", departure: "16:45", arrival: "19:15", duration: "2h 30m", price: 5000 },
  { id: 11, airline: "Air India", from: "Delhi", to: "Kolkata", departure: "18:00", arrival: "20:15", duration: "2h 15m", price: 6200 },
  { id: 12, airline: "IndiGo", from: "Bangalore", to: "Delhi", departure: "19:30", arrival: "22:15", duration: "2h 45m", price: 5900 },
  { id: 13, airline: "SpiceJet", from: "Mumbai", to: "Chennai", departure: "06:15", arrival: "08:45", duration: "2h 30m", price: 5200 },
  { id: 14, airline: "Vistara", from: "Kolkata", to: "Bangalore", departure: "07:45", arrival: "10:30", duration: "2h 45m", price: 6100 },
  { id: 15, airline: "GoAir", from: "Delhi", to: "Mumbai", departure: "09:00", arrival: "11:00", duration: "2h", price: 4700 },
  { id: 16, airline: "Air India", from: "Chennai", to: "Kolkata", departure: "10:30", arrival: "13:00", duration: "2h 30m", price: 5600 },
  { id: 17, airline: "IndiGo", from: "Mumbai", to: "Bangalore", departure: "11:15", arrival: "13:45", duration: "2h 30m", price: 5200 },
  { id: 18, airline: "SpiceJet", from: "Delhi", to: "Chennai", departure: "12:30", arrival: "15:15", duration: "2h 45m", price: 6000 },
  { id: 19, airline: "Vistara", from: "Bangalore", to: "Mumbai", departure: "13:00", arrival: "14:30", duration: "1h 30m", price: 4800 },
  { id: 20, airline: "GoAir", from: "Kolkata", to: "Delhi", departure: "14:15", arrival: "16:45", duration: "2h 30m", price: 5000 }
];

// GET all flights
export const getFlights = async () => {
  return flights;
};

// ADD flight (for Admin)
export const addFlight = async (newFlight) => {
  const id = flights.length + 1;
  flights.push({ id, ...newFlight });
  return { success: true, flight: { id, ...newFlight } };
};

