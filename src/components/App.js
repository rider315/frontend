

// import React, { useState, useEffect } from "react";
// import SeatGrid from "./components/SeatGrid";
// import axios from "./api"; // Ensure the axios instance is correctly configured
// import './App.css';

// const App = () => {
//   const [seats, setSeats] = useState([]); // State to store seats
//   const [numberOfSeats, setNumberOfSeats] = useState("");
//   const [message, setMessage] = useState("");
//   const [bookedSeats, setBookedSeats] = useState([]); // Track booked seats

//   // Fetch seat data from the backend
//   useEffect(() => {
//     const fetchSeats = async () => {
//       try {
//         const response = await axios.get("/seats");
//         console.log("Response data:", response.data); // Log the response data to inspect its structure

//         // Assuming the data is a flat array of seats, group them into rows
//         const rows = [];
//         const seatsPerRow = 10; // Example number of seats per row (you can adjust this)
//         for (let i = 0; i < response.data.length; i += seatsPerRow) {
//           rows.push(response.data.slice(i, i + seatsPerRow));
//         }

//         console.log("Rows structure: ", rows); // Log the rows structure
//         setSeats(rows); // Set the seats as a 2D array
//       } catch (error) {
//         console.error("Error fetching seats:", error);
//         setMessage("Error fetching seat data.");
//       }
//     };

//     fetchSeats();
//   }, []); // Only run once on component mount

//   // Handle seat booking
//   const handleBooking = async () => {
//     const numSeats = parseInt(numberOfSeats, 10); // Ensure it's an integer

//     // Validate input number
//     if (isNaN(numSeats) || numSeats < 1 || numSeats > 7) {
//       setMessage("Please enter a valid number of seats (1-7).");
//       return;
//     }

//     try {
//       const response = await axios.post("/book", { numberOfSeats: numSeats });
//       setMessage(`Seats booked: ${response.data.bookedSeats.join(", ")}`);
//       setBookedSeats(response.data.bookedSeats); // Update the booked seats
//       // Refresh seat data after booking
//       const seatResponse = await axios.get("/seats");
//       setSeats(seatResponse.data); // Assuming response data is still valid
//     } catch (error) {
//       console.error("Booking error:", error); // Log the error for debugging
//       setMessage(error.response?.data?.message || error.message || "Error booking seats.");
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Train Seat Reservation</h1>
//       <div>
//         <input
//           type="number"
//           value={numberOfSeats}
//           onChange={(e) => setNumberOfSeats(e.target.value)}
//           placeholder="Enter number of seats"
//         />
//         <button onClick={handleBooking}>Book Seats</button>
//       </div>
//       {message && <p>{message}</p>}
//       {/* Pass booked seats to SeatGrid to highlight them */}
//       <SeatGrid seats={seats} bookedSeats={bookedSeats} />
//     </div>
//   );
// };

// export default App;






