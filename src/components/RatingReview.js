import React, { useState } from 'react';
import './RatingReview.css';

function RatingReview({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, review });
    setRating(0);
    setReview('');
  };

  return (
    <form className="rating-review" onSubmit={handleSubmit}>
      <div className="rating">
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={rating}
          onChange={handleRatingChange}
          required
        />
      </div>
      <div className="review">
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          value={review}
          onChange={handleReviewChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RatingReview;
