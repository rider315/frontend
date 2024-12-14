


// import React, { useEffect, useState } from "react";  
// import SeatGrid from "./components/SeatGrid";  
// import axios from "./api"; // Adjust your API if necessary  
// import "./App.css";  

// const App = () => {  
//     const [seats, setSeats] = useState([]);  
//     const [numberOfSeats, setNumberOfSeats] = useState("");  
//     const [message, setMessage] = useState("");  

//     const transformSeatData = (data) => {  
//         const rows = [];  
//         const seatsPerRow = 7; // 7 seats in a row  
//         for (let i = 0; i < data.length; i += seatsPerRow) {  
//             rows.push(data.slice(i, i + seatsPerRow));  
//         }  
//         return rows;  
//     };  

//     useEffect(() => {  
//         const fetchSeats = async () => {  
//             try {  
//                 const response = await axios.get("/seats");  
//                 setSeats(transformSeatData(response.data));  
//             } catch (error) {  
//                 setMessage("Error fetching seat data.");  
//             }  
//         };  
//         fetchSeats();  
//     }, []);  

//     const handleBooking = async () => {
//         const numSeats = parseInt(numberOfSeats, 10);

//         // Validation checks
//         if (isNaN(numSeats) || numSeats < 1 || numSeats > 7) {
//             setMessage("Booking failed: Invalid number of seats.");
//             return;
//         }

//         const rowsCopy = [...seats];
//         let booked = [];
//         let remainingSeats = numSeats;
//         let rowBookedIndexes = new Set(); // Tracks rows that have already been booked

//         // Step 1: Look for a row to book seats, and book if possible
//         for (let rowIndex = 0; rowIndex < rowsCopy.length; rowIndex++) {
//             const row = rowsCopy[rowIndex];
//             const availableSeats = row.filter((seat) => !seat.isBooked);

//             if (availableSeats.length >= remainingSeats) {
//                 booked.push(...availableSeats.slice(0, remainingSeats));
//                 booked.forEach((seat) => (seat.isBooked = true));
//                 remainingSeats = 0;
//                 break;
//             }
//         }

//         // Step 2: Book remaining seats row-by-row
//         if (remainingSeats > 0) {
//             for (let rowIndex = 0; rowIndex < rowsCopy.length; rowIndex++) {
//                 const row = rowsCopy[rowIndex];
//                 const availableSeats = row.filter((seat) => !seat.isBooked);

//                 if (availableSeats.length > 0) {
//                     const seatsToBook = availableSeats.slice(0, remainingSeats);
//                     booked.push(...seatsToBook);
//                     seatsToBook.forEach((seat) => (seat.isBooked = true));
//                     remainingSeats -= seatsToBook.length;

//                     if (remainingSeats <= 0) break;
//                 }
//             }
//         }

//         // Final check for remaining seats
//         if (remainingSeats > 0) {
//             setMessage("Booking failed: Not enough seats available.");
//             return;
//         }

//         // API call to book the seats
//         try {
//             const response = await axios.post("/book", {
//                 seats: booked.map((seat) => ({ seatId: seat.seatId })),
//             });
//             console.log("Booking successful:", response.data);
//             setMessage(`Seats booked: ${booked.map((seat) => seat.seatId).join(", ")}`);

//             // Refresh seats
//             const updatedResponse = await axios.get("/seats");
//             setSeats(transformSeatData(updatedResponse.data));
//         } catch (error) {
//             console.error("Error booking seats:", error.response ? error.response.data : error.message);
//             setMessage("Booking failed: Seats already booked.");
//         }
//     };

//     return (  
//         <div className="App">  
//             <h1>Train Seat Reservation</h1>  
//             <div>  
//                 <input  
//                     type="number"  
//                     value={numberOfSeats}  
//                     onChange={(e) => setNumberOfSeats(e.target.value)}  
//                     placeholder="Enter number of seats"  
//                 />  
//                 <button onClick={handleBooking}>Book Seats</button>  
//             </div>  
//             {message && <p>{message}</p>}  
//             {Array.isArray(seats) && seats.length > 0 ? (  
//                 <SeatGrid seats={seats} />  
//             ) : (  
//                 <p>No seats available or error in seat data.</p>  
//             )}  
//         </div>  
//     );  
// };  

// export default App;










import React, { useEffect, useState } from "react";  
import SeatGrid from "./components/SeatGrid";  
import axios from "./api"; // Adjust your API if necessary  
import "./App.css";  

const App = () => {  
    const [seats, setSeats] = useState([]);  
    const [numberOfSeats, setNumberOfSeats] = useState("");  
    const [message, setMessage] = useState("");  

    const transformSeatData = (data) => {  
        const rows = [];  
        const seatsPerRow = 7; // 7 seats in a row  
        for (let i = 0; i < data.length; i += seatsPerRow) {  
            rows.push(data.slice(i, i + seatsPerRow));  
        }  
        return rows;  
    };  

    // Fetch seats from the server
    const fetchSeats = async () => {  
        try {  
            const response = await axios.get("/seats");  
            setSeats(transformSeatData(response.data));  
        } catch (error) {  
            setMessage("Error fetching seat data.");  
        }  
    };  

    useEffect(() => {  
        fetchSeats();  
    }, []);  

    const handleBooking = async () => {
        const numSeats = parseInt(numberOfSeats, 10);

        // Validation checks
        if (isNaN(numSeats) || numSeats < 1 || numSeats > 7) {
            setMessage("Booking failed: Invalid number of seats.");
            return;
        }

        const rowsCopy = [...seats];
        let booked = [];
        let remainingSeats = numSeats;

        // Step 1: Look for a row to book seats, and book if possible
        for (let rowIndex = 0; rowIndex < rowsCopy.length; rowIndex++) {
            const row = rowsCopy[rowIndex];
            const availableSeats = row.filter((seat) => !seat.isBooked);

            if (availableSeats.length >= remainingSeats) {
                booked.push(...availableSeats.slice(0, remainingSeats));
                booked.forEach((seat) => (seat.isBooked = true));
                remainingSeats = 0;
                break;
            }
        }

        // Step 2: Book remaining seats row-by-row
        if (remainingSeats > 0) {
            for (let rowIndex = 0; rowIndex < rowsCopy.length; rowIndex++) {
                const row = rowsCopy[rowIndex];
                const availableSeats = row.filter((seat) => !seat.isBooked);

                if (availableSeats.length > 0) {
                    const seatsToBook = availableSeats.slice(0, remainingSeats);
                    booked.push(...seatsToBook);
                    seatsToBook.forEach((seat) => (seat.isBooked = true));
                    remainingSeats -= seatsToBook.length;

                    if (remainingSeats <= 0) break;
                }
            }
        }

        // Final check for remaining seats
        if (remainingSeats > 0) {
            setMessage("Booking failed: Not enough seats available.");
            return;
        }

        // API call to book the seats
        try {
            const response = await axios.post("/book", {
                seats: booked.map((seat) => ({ seatId: seat.seatId })),
            });
            console.log("Booking successful:", response.data);
            setMessage(`Seats booked: ${booked.map((seat) => seat.seatId).join(", ")}`);

            // Refresh seats
            fetchSeats();
        } catch (error) {
            console.error("Error booking seats:", error.response ? error.response.data : error.message);
            setMessage("Booking failed: Seats already booked.");
        }
    };

    // Reset all seats (Unbook All Seats functionality)
    // const handleResetSeats = async () => {
    //     try {
    //         const response = await axios.post("/reset-seats"); // API call to reset seats
    //         setMessage(response.data.message || "All seats have been unbooked successfully!");
    //         fetchSeats(); // Refresh seat grid
    //     } catch (error) {
    //         console.error("Error resetting seats:", error.response ? error.response.data : error.message);
    //         setMessage("Failed to reset seats.");
    //     }
    // };
  //   const handleResetSeats = async () => {
  //     try {
  //         const response = await fetch("http://localhost:5000/reset", { method: "POST" });
  //         const data = await response.json();
  //         console.log(data.message);
  //     } catch (error) {
  //         console.error("Error resetting seats:", error);
  //     }
  // };

  const handleResetSeats = async () => {
    try {
        const response = await axios.post("/reset-seats"); // Consistent API path
        const data = response.data;
        console.log(data.message);
        setMessage(data.message || "All seats have been unbooked successfully!");
        fetchSeats(); // Refresh seat grid
    } catch (error) {
        console.error("Error resetting seats:", error.response ? error.response.data : error.message);
        setMessage("Failed to reset seats.");
    }
};

  

    return (  
        <div className="App">  
            <h1>Train Seat Reservation</h1>  
            <div>  
                <input  
                    type="number"  
                    value={numberOfSeats}  
                    onChange={(e) => setNumberOfSeats(e.target.value)}  
                    placeholder="Enter number of seats"  
                />  
                <button onClick={handleBooking}>Book Seats</button>  
                <button onClick={handleResetSeats} style={{ marginLeft: "10px" }}>
                    Unbook All Seats
                </button>
            </div>  
            {message && <p>{message}</p>}  
            {Array.isArray(seats) && seats.length > 0 ? (  
                <SeatGrid seats={seats} />  
            ) : (  
                <p>No seats available or error in seat data.</p>  
            )}  
        </div>  
    );  
};  

export default App;
