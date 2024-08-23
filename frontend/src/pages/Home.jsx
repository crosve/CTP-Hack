import React from "react";
import Navbar from "../components/NavBar";
import Background from "../components/Background";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Background>
      <Navbar />
      <main className="mt-[-100px] flex flex-grow items-center justify-center text-center">
        <div>
          <h1 className="animate-fade-in-down mb-8 text-4xl font-bold text-white">
            Discover the Resources You Need to Succeed at CUNY.
          </h1>
          <div className="animate-fade-in-delay transform space-x-4 opacity-0">
            <Link
              to="/questionnaire"
              className="rounded bg-blue-500 px-4 py-2 text-white shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600"
            >
              Answer Questionnaire
            </Link>
            <Link
              to="/"
              className="rounded bg-blue-500 px-4 py-2 text-white shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-600"
            >
              Chat with AI
            </Link>
          </div>
        </div>
      </main>
    </Background>
  );
};

export default Home;
