import React, { useState } from "react";
import Background from "../components/Background";
import Navbar from "../components/NavBar";
import RatingScale from "../components/RatingScale";

const questions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
  "Curabitur pretium tincidunt lacus, ut accumsan dolor sollicitudin a?",
  "Vivamus in erat ut urna cursus vestibulum at a felis?",
  "Etiam ut purus mattis mauris sodales aliquam?",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae?",
  "Maecenas nec odio et ante tincidunt tempus?",
];

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    question6: 0,
    question7: 0,
    question8: 0,
    question9: 0,
    question10: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (rating) => {
    const questionKey = `question${currentQuestion + 1}`;

    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionKey]: rating,
    }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 250);
    } else {
      setSubmitted(true);
      setTimeout(() => {
        console.log({
          ...responses,
          [questionKey]: rating,
        });
      }, 250);
    }
  };

  return (
    <Background>
      <Navbar />
      <div className="m-4 flex flex-grow items-center justify-center">
        <div className="mt-[-100px] w-full max-w-4xl rounded-md bg-white p-20">
          <h2 className="mb-12 text-center text-4xl font-bold text-blue-900">
            {submitted ? "Submitted" : "Questionnaire"}
          </h2>
          {!submitted ? (
            <div
              key={currentQuestion}
              className="animate-fade-in-question space-y-8"
            >
              <p className="text-xl font-semibold">
                {currentQuestion + 1}. {questions[currentQuestion]}
              </p>
              <RatingScale
                question={`question${currentQuestion + 1}`}
                value={responses[`question${currentQuestion + 1}`]}
                onChange={handleRatingChange}
              />
            </div>
          ) : (
            <p className="text-center text-lg font-semibold text-blue-700">
              Your responses have been submitted. The backend will process your
              answers shortly...
            </p>
          )}
        </div>
      </div>
    </Background>
  );
};

export default Questionnaire;
