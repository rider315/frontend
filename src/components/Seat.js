// // import React from "react";
// // import "./Seat.css";

// // // Accept isBooked as a prop to check the status of the seat
// // const Seat = ({ seat, isBooked }) => {
// //   return (
// //     <div
// //       className={`seat ${isBooked ? "booked" : "available"}`} // Apply "booked" or "available" class based on the isBooked status
// //       title={`Seat ${seat.id}`}
// //     >
// //       {seat.id}
// //     </div>
// //   );
// // };

// // export default Seat;

// import React from "react";
// import "./Seat.css";

// // Accept isBooked as a prop to check the status of the seat
// const Seat = ({ seat, isBooked }) => {
//   return (
//     <div
//       className={`seat ${isBooked ? "booked" : "available"}`} // Apply "booked" or "available" class based on the isBooked status
//       title={`Seat ${seat.id}`}
//     >
//       {seat.id}
//     </div>
//   );
// };

// export default Seat;




// import React from "react";
// import "./Seat.css";

// const Seat = ({ seat, isBooked }) => {
//   return (
//     <div
//       className={`seat ${isBooked ? "booked" : "available"}`}
//       title={`Seat ${seat.id}`}
//     >
//       {seat.id}
//     </div>
//   );
// };

// export default Seat;


// import React from "react";
// import "./Seat.css";

// const Seat = ({ seat, isBooked }) => {
//   return (
//     <div
//       className={`seat ${isBooked ? "booked" : "available"}`}
//       title={`Seat ${seat.id}`}
//     >
//       {seat.id}
//     </div>
//   );
// };

// export default Seat;

// import React from "react";
// import "./Seat.css";

// const Seat = ({ seat, isBooked }) => {
//   return (
//     <div
//       className={`seat ${isBooked ? "booked" : "available"}`}
//       title={`Seat ${seat.id}`}
//     >
//       {seat.id}
//     </div>
//   );
// };

// export default Seat;

// import React from "react";
// import "./Seat.css";

// const Seat = ({ seat, isBooked }) => {
//   return (
//     <div
//       className={`seat ${isBooked ? "booked" : "available"}`}
//       title={`Seat ${seat.seatId}`}  // Use seat.seatId for the title
//     >
//       {seat.seatId}  {/* Display seat.seatId inside the seat box */}
//     </div>
//   );
// };

// export default Seat;

import React from "react";
import "./Seat.css";

const Seat = ({ seat, isBooked }) => {
  return (
    <div
      className={`seat ${isBooked ? "booked" : "available"}`}
      title={`Seat ${seat.seatId}`}  // Use seat.seatId for the title
    >
      {seat.seatId}  {/* Display seat.seatId inside the seat box */}
    </div>
  );
};

export default Seat;
