import React, { useState } from 'react';
import './Reservation.css';

function Reservation({ onSubmit }) {
    // Initialize state for the reservation form data
    const [reservationData, setReservationData] = useState({
        date: '',
        time: '',
        partySize: 1,
        name: '',
        contactInfo: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationData({ ...reservationData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(reservationData);
        }
        // Reset the form data after submission
        setReservationData({
            date: '',
            time: '',
            partySize: 1,
            name: '',
            contactInfo: ''
        });
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            {/* Date input */}
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={reservationData.date}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Time input */}
            <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={reservationData.time}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Party size input */}
            <div className="form-group">
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
            </div>

            {/* Name input */}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={reservationData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Contact information input */}
            <div className="form-group">
                <label htmlFor="contactInfo">Contact Information:</label>
                <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={reservationData.contactInfo}
                    onChange={handleChange}
                    required
                    placeholder="Email or phone number"
                />
            </div>

            {/* Submit button */}
            <button type="submit">Submit Reservation</button>
        </form>
    );
}

export default Reservation;
