import React, { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const languages = ["JavaScript", "Python"];

// __define-ocg__ - Comment with the specified keyword
const LanguageContext = createContext();

function App() {
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  // __define-ocg__ - Variable with the specified name
  const varOcg = true;

  return (
    // __define-ocg__ - Using Context.Provider to provide the context value
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
        favorite programming language: {favoriteLanguage}
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
