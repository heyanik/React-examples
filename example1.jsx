import React, { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const languages = ["JavaScript", "Python"];

// Create a context with initial values
const LanguageContext = createContext({
  favoriteLanguage: languages[0],
  toggleLanguage: () => {},
});

function App() {
  // State to manage the current favorite language
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  // Function to toggle the favorite language
  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(favoriteLanguage);
    const newIndex = (currentIndex + 1) % languages.length;
    setFavoriteLanguage(languages[newIndex]);
  };

  // Provide the context value to the child components
  const contextValue = {
    favoriteLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  // Consume the context to access the current favorite language and toggle function
  const { favoriteLanguage, toggleLanguage } = useContext(LanguageContext);

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
