import React, { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const languages = ["JavaScript", "Python"];

const LanguageContext = createContext();

function App() {
  // implement Context here so can be used in child components
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  return (
    <LanguageContext.Provider value={{ favoriteLanguage, setFavoriteLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const { favoriteLanguage, setFavoriteLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(favoriteLanguage);
    const newIndex = (currentIndex + 1) % languages.length;
    setFavoriteLanguage(languages[newIndex]);
  };

  return (
    <div>
      <p id="favoriteLanguage">
        favorite programming languages: {favoriteLanguage}
      </p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        toggle language
      </button>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
