import React, { useState } from "react";

const Header = () => {
  const [location, setLocation] = useState("Not Set");
  const [searchInput, setSearchInput] = useState("");

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        },
        (error) => {
          console.error("Error detecting location:", error);
          setLocation("Location detection failed");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setLocation(searchInput);
      setSearchInput(""); // Clear the input after submission
    }
  };

  return (
    <header className="bg-gray-100 py-4 px-6 flex items-center justify-between shadow">
      <h1 className="text-xl font-semibold text-gray-800">Delivery Location</h1>

      <div className="flex items-center space-x-4">
        {/* Current Location Display */}
        <div className="text-sm text-gray-600">
          <strong>Location:</strong> {location}
        </div>

        {/* Detect My Location Button */}
        <button
          onClick={detectLocation}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Detect My Location
        </button>

        {/* Search Location Form */}
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Search delivery location"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-4 py-2 border rounded-l bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
