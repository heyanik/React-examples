import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function WeatherDashboard() {
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (mockWeatherData.hasOwnProperty(city)) {
      setWeather(mockWeatherData[city]);
      setError("");
    } else {
      setWeather(null);
      setError("City not found.");
    }
  };

  const handleCityClick = (clickedCity) => {
    setCity(clickedCity);
    handleSearch();
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>
      <div id="weatherData">
        {weather ? (
          <>
            <div>Temperature: {weather.temperature}</div>
            <div>Humidity: {weather.humidity}</div>
            <div>Wind Speed: {weather.windSpeed}</div>
          </>
        ) : (
          <div>{error}</div>
        )}
      </div>
      <div id="previousSearches">
        {Object.keys(mockWeatherData).map((previousCity) => (
          <button
            key={previousCity}
            onClick={() => handleCityClick(previousCity)}
          >
            {previousCity}
          </button>
        ))}
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<WeatherDashboard />);
