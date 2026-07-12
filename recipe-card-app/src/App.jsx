import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipes";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 py-12 px-6">

      <h1 className="text-5xl font-bold text-center text-orange-700 mb-3">
        Recipe Book
      </h1>

      <p className="text-center text-gray-600 text-lg mb-12">
        Discover traditional Nepali dishes and their ingredients.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}

      </div>

    </div>
  );
}

export default App;