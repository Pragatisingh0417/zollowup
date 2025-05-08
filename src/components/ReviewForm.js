import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ReviewPage = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: fetch booking details if needed
    const fetchBooking = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}`);
        const data = await res.json();
        setBooking(data);
      } catch (err) {
        console.error("Error fetching booking:", err);
      }
    };
    fetchBooking();
  }, [bookingId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      bookingId,
      rating,
      review: reviewText,
    };

    try {
      const res = await fetch("http://localhost:5000/api/reviews/submit", { // <-- Updated endpoint here
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
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Write a Review</h2>

      {success ? (
        <p className="text-green-600 text-center font-semibold">
          Thank you! Your review has been submitted.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Star{r > 1 && "s"}
                </option>
              ))}
            </select>
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
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewPage;
