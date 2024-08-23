import React from "react";
import Navbar from "../components/NavBar";
import Background from "../components/Background";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <Background>
      <Navbar />
      <div className="m-4 flex flex-grow items-center justify-center">
        <div className="flex h-[700px] w-full max-w-xl flex-col rounded-md bg-white p-4">
          <div className="flex flex-col space-y-4 overflow-auto">
            <div className="flex items-start rounded p-6 hover:bg-gray-100">
              <FaReact className="mr-4 mt-2 flex-shrink-0 text-2xl" />
              <div>
                <h2 className="font-semibold">Title</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores error repellendus natus, cum, voluptatum illum
                  doloremque illo atque unde sapiente amet laudantium ad dolores
                  magni!
                </p>
              </div>
            </div>

            <div className="flex items-start rounded p-4 hover:bg-gray-100">
              <FaReact className="mr-4 mt-2 flex-shrink-0 text-2xl" />
              <div>
                <h2 className="font-semibold">Title</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis doloremque eaque illo dolore doloribus deleniti
                  accusantium, officiis quasi iure eum.
                </p>
              </div>
            </div>

            <div className="flex items-start rounded p-4 hover:bg-gray-100">
              <FaReact className="mr-4 mt-2 flex-shrink-0 text-2xl" />
              <div>
                <h2 className="font-semibold">Title</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis doloremque eaque illo dolore doloribus deleniti
                  accusantium, officiis quasi iure eum.{" "}
                </p>
              </div>
            </div>

            <div className="flex items-start rounded p-4 hover:bg-gray-100">
              <FaReact className="mr-4 mt-2 flex-shrink-0 text-2xl" />
              <div>
                <h2 className="font-semibold">Title</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis doloremque eaque illo dolore doloribus deleniti
                  accusantium, officiis quasi iure eum.{" "}
                </p>
              </div>
            </div>

            <div className="flex items-start rounded p-4 hover:bg-gray-100">
              <FaReact className="mr-4 mt-2 flex-shrink-0 text-2xl" />
              <div>
                <h2 className="font-semibold">Title</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis doloremque eaque illo dolore doloribus deleniti
                  accusantium, officiis quasi iure eum.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default About;
