

// import React from "react";
// import Seat from "./Seat";
// import "./SeatGrid.css";

// const SeatGrid = ({ seats, bookedSeats = [] }) => {
//   // Check if the seat is booked
//   const isBooked = (seatId) => {
//     return bookedSeats.includes(seatId);
//   };

//   // Check if seats is a valid array before rendering
//   if (!Array.isArray(seats) || seats.length === 0) {
//     return <p>No seats available.</p>;
//   }

//   return (
//     <div className="seat-grid">
//       {seats.map((row, rowIndex) => (
//         // Ensure row is an array before mapping
//         Array.isArray(row) ? (
//           <div className="seat-row" key={`row-${rowIndex}`}>
//             {row.map((seat) => (
//               <Seat
//                 key={seat.id}
//                 seat={seat}
//                 isBooked={isBooked(seat.id)} // Pass the booked status to the Seat component
//               />
//             ))}
//           </div>
//         ) : null
//       ))}
//     </div>
//   );
// };

// export default SeatGrid;









// import React from "react";
// import Seat from "./Seat";
// import "./SeatGrid.css";

// const SeatGrid = ({ seats, bookedSeats = [] }) => {
//   const isBooked = (seatId) => bookedSeats.includes(seatId);

//   if (!Array.isArray(seats) || seats.length === 0) {
//     return <p>No seats available.</p>;
//   }

//   return (
//     <div className="seat-grid">
//       {seats.map((row, rowIndex) => (
//         <div className="seat-row" key={`row-${rowIndex}`}>
//           {Array.isArray(row) &&
//             row.map((seat) => (
//               <Seat
//                 key={seat.id}
//                 seat={seat}
//                 isBooked={isBooked(seat.id)}
//               />
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SeatGrid;

// import React from "react";
// import Seat from "./Seat";
// import "./SeatGrid.css";

// const SeatGrid = ({ seats, bookedSeats = [] }) => {
//   const isBooked = (seatId) => bookedSeats.includes(seatId);

//   if (!Array.isArray(seats) || seats.length === 0) {
//     return <p>No seats available.</p>;
//   }

//   return (
//     <div className="seat-grid">
//       {seats.map((row, rowIndex) => (
//         <div className="seat-row" key={`row-${rowIndex}`}>
//           {Array.isArray(row) &&
//             row.map((seat) => (
//               <Seat
//                 key={seat.id}
//                 seat={seat}
//                 isBooked={isBooked(seat.id)}
//               />
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SeatGrid;

// import React from "react";
// import Seat from "./Seat";
// import "./SeatGrid.css";

// const SeatGrid = ({ seats, bookedSeats = [] }) => {
//   const isBooked = (seatId) => bookedSeats.includes(seatId);

//   if (!Array.isArray(seats) || seats.length === 0) {
//     return <p>No seats available.</p>;
//   }

//   return (
//     <div className="seat-grid">
//       {seats.map((row, rowIndex) => (
//         <div className="seat-row" key={`row-${rowIndex}`}>
//           {Array.isArray(row) &&
//             row.map((seat) => (
//               <Seat
//                 key={seat.id}
//                 seat={seat}
//                 isBooked={isBooked(seat.id)}
//               />
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SeatGrid;



// import React from "react";
// import Seat from "./Seat";
// import "./SeatGrid.css";

// const SeatGrid = ({ seats, bookedSeats = [] }) => {
//   // Function to check if a seat is booked
//   const isBooked = (seatId) => bookedSeats.includes(seatId);

//   // Return a message if no seats are available
//   if (!Array.isArray(seats) || seats.length === 0) {
//     return <p>No seats available.</p>;
//   }

//   return (
//     <div className="seat-grid">
//       {seats.map((row, rowIndex) => (
//         <div className="seat-row" key={`row-${rowIndex}`}>
//           {Array.isArray(row) &&
//             row.map((seat) => (
//               <Seat
//                 key={seat.seatId}  // Use seatId as the unique key for each seat
//                 seat={seat}
//                 isBooked={isBooked(seat.seatId)}  // Check if the seat is booked using seatId
//               />
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SeatGrid;



// import React from "react";
// import Seat from "./Seat";
// import "./SeatGrid.css";

// const SeatGrid = ({ seats }) => {
//   if (!Array.isArray(seats) || seats.length === 0) {
//     return <p>No seats available.</p>;
//   }

//   return (
//     <div className="seat-grid">
//       {seats.map((row, rowIndex) => (
//         <div className="seat-row" key={`row-${rowIndex}`}>
//           {Array.isArray(row) &&
//             row.map((seat) => (
//               <Seat
//                 key={seat.seatId}
//                 seat={seat}
//                 isBooked={seat.isBooked}
//               />
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SeatGrid;


// import React from "react";  
// import Seat from "./Seat";  
// import "./SeatGrid.css";  

// const SeatGrid = ({ seats }) => {  
//   if (!Array.isArray(seats) || seats.length === 0) {  
//     return <p>No seats available.</p>;  
//   }  

//   return (  
//     <div className="seat-grid">  
//       {seats.map((row, rowIndex) => (  
//         <div className="seat-row" key={`row-${rowIndex}`}>  
//           {Array.isArray(row) &&  
//             row.map((seat) => (  
//               <Seat  
//                 key={seat.seatId}  
//                 seat={seat}  
//                 isBooked={seat.isBooked}  
//               />  
//             ))}  
//         </div>  
//       ))}  
//     </div>  
//   );  
// };  

// export default SeatGrid;

// import React from "react";  
// import Seat from "./Seat";  
// import "./SeatGrid.css";  

// const SeatGrid = ({ seats }) => {  
//   if (!Array.isArray(seats) || seats.length === 0) {  
//     return <p>No seats available.</p>;  
//   }  

//   return (  
//     <div className="seat-grid">  
//       {seats.map((row, rowIndex) => (  
//         <div className="seat-row" key={`row-${rowIndex}`}>  
//           {Array.isArray(row) &&  
//             row.map((seat) => (  
//               <Seat  
//                 key={seat.seatId}  
//                 seat={seat}  
//                 isBooked={seat.isBooked}  
//               />  
//             ))}  
//         </div>  
//       ))}  
//     </div>  
//   );  
// };  

// export default SeatGrid;

import React from "react";  
import Seat from "./Seat";  
import "./SeatGrid.css";  

const SeatGrid = ({ seats }) => {  
  if (!Array.isArray(seats) || seats.length === 0) {  
    return <p>No seats available.</p>;  
  }  

  return (  
    <div className="seat-grid">  
      {seats.map((row, rowIndex) => (  
        <div className="seat-row" key={`row-${rowIndex}`}>  
          {Array.isArray(row) &&  
            row.map((seat) => (  
              <Seat  
                key={seat.seatId}  
                seat={seat}  
                isBooked={seat.isBooked}  
              />  
            ))}  
        </div>  
      ))}  
    </div>  
  );  
};  

export default SeatGrid;