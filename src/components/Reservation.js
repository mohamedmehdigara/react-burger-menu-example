import React, { useState } from 'react';
import './Reservation.css';

function Reservation({ onSubmit }) {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    partySize: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reservationData);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={reservationData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={reservationData.time}
        onChange={handleChange}
        required
      />

      <label htmlFor="partySize">Party Size:</label>
      <input
        type="number"
        id="partySize"
        name="partySize"
        min="1"
        value={reservationData.partySize}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Reservation;
