import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ReviewPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    if (!bookingId) {
      setError("Invalid booking ID.");
      setLoading(false);
      return;
    }

    const fetchBooking = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/bookings/${bookingId}`);
        if (!res.ok) throw new Error("Booking not found.");
        const data = await res.json();
        setBooking(data);
      } catch (err) {
        setError("Error fetching booking.");
        console.error("Error fetching booking:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const reviewData = {
      bookingId,
      rating,
      review: reviewText,
    };

    try {
      const res = await fetch(`${API_BASE}/api/reviews/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        alert("Failed to submit review.");
      }
    } catch (err) {
      console.error("Review submission error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Write a Review</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : success ? (
        <p className="text-green-600 text-center font-semibold">
          Thank you! Your review has been submitted.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Rating</label>
            <div className="flex space-x-1 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer transition-colors duration-200 ${
                    (hoverRating || rating) >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(null)}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Your Review</label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={5}
              className="w-full border px-3 py-2 rounded"
              placeholder="Share your experience..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded text-white transition ${
              isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewPage;
