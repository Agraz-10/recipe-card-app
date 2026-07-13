import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipes";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-100 to-red-100">

      <Header />

      <SearchBar />

      <CategoryFilter />

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;