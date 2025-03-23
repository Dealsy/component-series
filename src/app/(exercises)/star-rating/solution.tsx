"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  const handleRating = (star: number) => {
    setRating(star);
    localStorage.setItem("rating", star.toString());
  };

  useEffect(() => {
    const rating = localStorage.getItem("rating");
    if (rating) {
      setRating(parseInt(rating));
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="rating">Rating</label>

      <div className="flex flex-row gap-2">
        {stars.map((star) => (
          <div key={star}>
            <button
              onClick={() => {
                handleRating(star);
              }}
            >
              <Star
                className={`w-6 h-6 cursor-pointer hover:fill-yellow-400 hover:text-yellow-400 ${
                  rating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
