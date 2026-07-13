import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import recipes from "./data/recipes";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
              filteredRecipes={filteredRecipes}
              onViewRecipe={setSelectedRecipe}
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
              filteredRecipes={filteredRecipes}
              onViewRecipe={setSelectedRecipe}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;