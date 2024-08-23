import React, { useState } from "react";
import Background from "../components/Background";
import Navbar from "../components/NavBar";
import MultipleChoice from "../components/MultipleChoice";
import { questions } from "../data/questionnaireQuestions";

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (selectedOption) => {
    const questionKey = `question${currentQuestion + 1}`;

    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionKey]: selectedOption,
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
          [questionKey]: selectedOption,
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
                {currentQuestion + 1}. {questions[currentQuestion].question}
              </p>
              <MultipleChoice
                question={`question${currentQuestion + 1}`}
                options={questions[currentQuestion].options}
                value={responses[`question${currentQuestion + 1}`]}
                onChange={handleOptionChange}
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
