import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipes";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-100 to-red-100">

      <header className="text-center py-12">

        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-700">
          Nepali Recipe Book
        </h1>

        <p className="mt-4 text-gray-700 text-lg">
          Discover Authentic Flavors of Nepal
        </p>

      </header>

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