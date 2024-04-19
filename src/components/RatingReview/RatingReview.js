import React, { useState } from 'react';
import './RatingReview.css';

function RatingReview({ onSubmit, minRating = 1, maxRating = 5 }) {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    // Handle rating change
    const handleRatingChange = (value) => {
        setRating(value);
    };

    // Handle review text change
    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating > 0 && review.trim()) {
            onSubmit({ rating, review });
            setRating(0);
            setReview('');
            // Optional: Provide feedback to the user, e.g., a success message
        }
    };

    // Handle form reset
    const handleClear = () => {
        setRating(0);
        setReview('');
    };

    return (
        <form className="rating-review" onSubmit={handleSubmit}>
            {/* Rating section */}
            <div className="rating">
                <label htmlFor="rating">Rating:</label>
                {/* Star rating component */}
                <div className="rating-stars">
                    {[...Array(maxRating)].map((_, i) => {
                        const starValue = i + 1;
                        return (
                            <span
                                key={starValue}
                                className={`star ${starValue <= rating ? 'filled' : ''}`}
                                onClick={() => handleRatingChange(starValue)}
                                aria-label={`${starValue} star`}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && handleRatingChange(starValue)}
                            >
                                &#9733;
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* Review section */}
            <div className="review">
                <label htmlFor="review">Review:</label>
                <textarea
                    id="review"
                    name="review"
                    value={review}
                    onChange={handleReviewChange}
                    required
                    aria-required="true"
                    placeholder="Enter your review..."
                    rows={5}
                />
            </div>

            {/* Action buttons */}
            <div className="action-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </div>
        </form>
    );
}

export default RatingReview;
