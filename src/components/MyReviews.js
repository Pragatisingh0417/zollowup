// MyReviews.jsx
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAuth } from "./AuthContext";

const MyReviews = () => {
  const { token } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editRating, setEditRating] = useState(0);

  const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    // Demo: Set one hardcoded review
    setReviews([
      {
        _id: "demo123",
        rating: 4,
        review: "Great service, would recommend!",
        createdAt: new Date().toISOString(),
        booking: {
          service: { name: "Maid " },
        },
      },
    ]);
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    setReviews((prev) => prev.filter((r) => r._id !== id));
    // Optionally: await fetch(`${API_BASE}/api/reviews/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` }});
  };

  const startEditing = (review) => {
    setEditingId(review._id);
    setEditText(review.review);
    setEditRating(review.rating);
  };

  const handleEditSubmit = async () => {
    setReviews((prev) =>
      prev.map((r) =>
        r._id === editingId ? { ...r, review: editText, rating: editRating } : r
      )
    );
    setEditingId(null);
    // Optionally: await fetch(`${API_BASE}/api/reviews/${editingId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ review: editText, rating: editRating }) });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">My Reviews</h2>
      {reviews.length === 0 ? (
        <p>You haven't submitted any reviews yet.</p>
      ) : (
        <ul className="space-y-6">
          {reviews.map((review) => (
            <li key={review._id} className="border-b pb-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-800">
                  {review.booking?.service?.name || "Service"}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
              {editingId === review._id ? (
                <>
                  <div className="flex space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`cursor-pointer text-2xl ${
                          star <= editRating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        onClick={() => setEditRating(star)}
                      />
                    ))}
                  </div>
                  <textarea
                    className="w-full border p-2 rounded mb-2"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleEditSubmit}
                      className="px-3 py-1 bg-blue-600 text-white rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-3 py-1 border rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`${
                          star <= review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-2">{review.review}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => startEditing(review)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReviews;
