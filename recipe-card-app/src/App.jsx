import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipes";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-10">
        Recipe Book
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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