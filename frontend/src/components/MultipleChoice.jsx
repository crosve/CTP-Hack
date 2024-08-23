import React from "react";

const MultipleChoice = ({ question, options, value, onChange }) => {
  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex cursor-pointer items-center space-x-4"
        >
          <input
            type="radio"
            name={question}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            className="hidden"
          />
          <span
            className={`inline-block h-10 w-10 rounded-full text-center leading-10 ${
              value === option
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-blue-200"
            }`}
          >
            {String.fromCharCode(65 + index)}
          </span>
          <span className="text-lg font-semibold">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default MultipleChoice;
