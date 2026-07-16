import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import recipes from "./data/recipes";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipePage from "./pages/RecipePage";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

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
  const sortedRecipes = [...filteredRecipes];

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