import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import recipes from "./data/recipes";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipePage from "./pages/RecipePage";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Load favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites whenever they change
  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Filter Recipes
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort Recipes
  let displayedRecipes = [...filteredRecipes];

  if (showFavoritesOnly) {
    displayedRecipes = displayedRecipes.filter((recipe) =>
      favorites.includes(recipe.id)
    );
  }

  const sortedRecipes = [...displayedRecipes];

  switch (sortOption) {
    case "name":
      sortedRecipes.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    case "rating":
      sortedRecipes.sort((a, b) =>
        b.rating - a.rating
      );
      break;

    case "calories":
      sortedRecipes.sort((a, b) =>
        a.calories - b.calories
      );
      break;

    case "time":
      sortedRecipes.sort(
        (a, b) =>
          parseInt(a.time) - parseInt(b.time)
      );
      break;

    default:
      break;
  }

  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      setFavorites(
        favorites.filter((id) => id !== recipeId)
      );
    } else {
      setFavorites([...favorites, recipeId]);
    }
  };

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              filteredRecipes={sortedRecipes}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/recipes"
          element={
            <Recipes
              search={search}
              setSearch={setSearch}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              filteredRecipes={sortedRecipes}
              sortOption={sortOption}
              setSortOption={setSortOption}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              showFavoritesOnly={showFavoritesOnly}
              setShowFavoritesOnly={setShowFavoritesOnly}
            />
          }
        />

        <Route
          path="/recipes/:id"
          element={<RecipePage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;