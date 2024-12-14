import React, { useEffect, useState } from "react";  
import SeatGrid from "./components/SeatGrid";  
import axios from "./api";   
import "./App.css";  

const App = () => {  
    const [seats, setSeats] = useState([]);  
    const [numberOfSeats, setNumberOfSeats] = useState("");  
    const [message, setMessage] = useState("");  

    // Helper function to transform flat seat data into rows (7 seats per row).
    const transformSeatData = (data) => {  
        const rows = [];  
        const seatsPerRow = 7; // 7 seats in a row  
        for (let i = 0; i < data.length; i += seatsPerRow) {  
            rows.push(data.slice(i, i + seatsPerRow));  
        }  
        return rows;  
    };  

    // Fetch the current seat data from the server.
    const fetchSeats = async () => {  
        try {  
            const response = await axios.get("/seats"); // API call to fetch seat data.
            setSeats(transformSeatData(response.data)); // Transform and store the seat data.
        } catch (error) {  
            setMessage("Error fetching seat data."); // Handle errors in fetching.
        }  
    };  

    // Fetch seat data when the component loads.
    useEffect(() => {  
        fetchSeats();  
    }, []);  

    // Handles booking seats based on the user input.
    const handleBooking = async () => {
        const numSeats = parseInt(numberOfSeats, 10); // Convert input to a number.

        // Validation checks for seat booking requirements.
        if (isNaN(numSeats) || numSeats < 1 || numSeats > 7) {
            setMessage("Booking failed: Invalid number of seats."); // Restrict booking to 1-7 seats.
            return;
        }

        const rowsCopy = [...seats]; // Create a copy of the current seat layout.
        let booked = []; // Array to store the booked seats.
        let remainingSeats = numSeats; // Counter for remaining seats to be booked.

        // Step 1: Try to book seats within a single row if possible.
        for (let rowIndex = 0; rowIndex < rowsCopy.length; rowIndex++) {
            const row = rowsCopy[rowIndex];
            const availableSeats = row.filter((seat) => !seat.isBooked); // Find unbooked seats in the row.

            // If the row has enough available seats, book them all.
            if (availableSeats.length >= remainingSeats) {
                booked.push(...availableSeats.slice(0, remainingSeats)); // Add seats to the booking list.
                booked.forEach((seat) => (seat.isBooked = true)); // Mark seats as booked.
                remainingSeats = 0; // No more seats need to be booked.
                break; // Exit loop as booking is complete.
            }
        }

        // Step 2: If seats couldn't be booked in one row, book them across multiple rows.
        if (remainingSeats > 0) {
            for (let rowIndex = 0; rowIndex < rowsCopy.length; rowIndex++) {
                const row = rowsCopy[rowIndex];
                const availableSeats = row.filter((seat) => !seat.isBooked);

                // If there are available seats in the row, book as many as needed.
                if (availableSeats.length > 0) {
                    const seatsToBook = availableSeats.slice(0, remainingSeats); // Take only required number of seats.
                    booked.push(...seatsToBook);
                    seatsToBook.forEach((seat) => (seat.isBooked = true)); // Mark these seats as booked.
                    remainingSeats -= seatsToBook.length; // Decrease remaining count.

                    if (remainingSeats <= 0) break; // Exit loop when all seats are booked.
                }
            }
        }

        // Step 3: Final check - If not enough seats are available, show an error.
        if (remainingSeats > 0) {
            setMessage("Booking failed: Not enough seats available.");
            return;
        }

        // Send booked seat details to the backend for confirmation.
        try {
            const response = await axios.post("/book", {
                seats: booked.map((seat) => ({ seatId: seat.seatId })), // Send only seat IDs.
            });
            console.log("Booking successful:", response.data);
            setMessage(`Seats booked: ${booked.map((seat) => seat.seatId).join(", ")}`); // Display success message.

            // Refresh seat data after booking.
            fetchSeats();
        } catch (error) {
            console.error("Error booking seats:", error.response ? error.response.data : error.message);
            setMessage("Booking failed: Seats already booked.");
        }
    };

    // Handle reset/unbooking of all seats.
    const handleResetSeats = async () => {
        try {
            const response = await axios.post("/reset-seats"); // API call to reset seats.
            const data = response.data;
            console.log(data.message);
            setMessage(data.message || "All seats have been unbooked successfully!");
            fetchSeats(); // Refresh seat grid after reset.
        } catch (error) {
            console.error("Error resetting seats:", error.response ? error.response.data : error.message);
            setMessage("Failed to reset seats.");
        }
    };

    return (  
        <div className="App">  
            <h1>Train Seat Reservation</h1>  
            <div>  
                {/* Input to enter the number of seats to book */}
                <input  
                    type="number"  
                    value={numberOfSeats}  
                    onChange={(e) => setNumberOfSeats(e.target.value)}  
                    placeholder="Enter number of seats"  
                />  
                {/* Button to book seats */}
                <button onClick={handleBooking}>Book Seats</button>  
                {/* Button to reset all bookings */}
                <button onClick={handleResetSeats} style={{ marginLeft: "10px" }}>
                    Unbook All Seats
                </button>
            </div>  
            {/* Show messages (error/success) */}
            {message && <p>{message}</p>}  
            {/* Render seat grid if seat data is available */}
            {Array.isArray(seats) && seats.length > 0 ? (  
                <SeatGrid seats={seats} />  
            ) : (  
                <p>No seats available or error in seat data.</p>  
            )}  
        </div>  
    );  
};  

export default App;
