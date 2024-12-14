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