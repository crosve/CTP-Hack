import React from "react";

const RatingScale = ({ question, value, onChange }) => {
  return (
    <div className="flex justify-between">
      {[1, 2, 3, 4, 5].map((rating) => (
        <label key={rating} className="cursor-pointer">
          <input
            type="radio"
            name={question}
            value={rating}
            checked={value === rating}
            onChange={() => onChange(rating)}
            className="hidden"
          />
          <span
            className={`inline-block h-10 w-10 rounded-full text-center leading-10 ${
              value >= rating
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-200"
            }`}
          >
            {rating}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RatingScale;
