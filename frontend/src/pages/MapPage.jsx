import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Background from "../components/Background";
import Navbar from "../components/NavBar";

const NYC_COORDINATES = [40.7128, -74.006];

const BOUNDS = [
  [40.477399, -74.25909],
  [40.917577, -73.700272],
];

const CUNY_RESOURCES = [
  {
    name: "test",
    coordinates: [40.7128, -74.006],
    description: "test desc",
  },
];

const MapPage = () => {
  return (
    <Background>
      <Navbar />
      <div className="m-8 flex">
        <div className="hidden h-[85vh] w-full overflow-hidden rounded-bl-md rounded-tl-md sm:block md:w-[65%]">
          <MapContainer
            center={NYC_COORDINATES}
            zoom={11}
            maxBounds={BOUNDS}
            maxZoom={18}
            minZoom={11}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {CUNY_RESOURCES.map((resource, index) => (
              <Marker key={index} position={resource.coordinates}>
                <Popup>
                  <span className="font-semibold">{resource.name}</span>
                  <br />
                  {resource.description}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="h-[85vh] w-full overflow-auto rounded-md bg-white p-8 md:w-[35%] md:rounded-bl-none md:rounded-br-md md:rounded-tl-none md:rounded-tr-md">
          <h2 className="mb-4 text-2xl font-bold">Lorem ipsum</h2>
          <h3 className="mb-2 block text-xl font-semibold text-red-600 sm:hidden">
            The leaflet map is only available on a larger device.
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </Background>
  );
};

export default MapPage;
