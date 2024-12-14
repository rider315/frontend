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
