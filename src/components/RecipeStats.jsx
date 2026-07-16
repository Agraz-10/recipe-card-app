function RecipeStats({
  recipes,
  favorites,
}) {
  const totalRecipes = recipes.length;

  const totalCategories = new Set(
    recipes.map((recipe) => recipe.category)
  ).size;

  const averageRating =
    recipes.reduce(
      (sum, recipe) => sum + recipe.rating,
      0
    ) / totalRecipes;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-12">

      <div className="bg-white rounded-2xl shadow-md p-6 text-center">

        <p className="text-4xl">📚</p>

        <h3 className="text-3xl font-bold text-orange-600 mt-3">
          {totalRecipes}
        </h3>

        <p className="text-gray-600 mt-2">
          Recipes
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center">

        <p className="text-4xl">🍽</p>

        <h3 className="text-3xl font-bold text-orange-600 mt-3">
          {totalCategories}
        </h3>

        <p className="text-gray-600 mt-2">
          Categories
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center">

        <p className="text-4xl">❤️</p>

        <h3 className="text-3xl font-bold text-orange-600 mt-3">
          {favorites.length}
        </h3>

        <p className="text-gray-600 mt-2">
          Favorites
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center">

        <p className="text-4xl">⭐</p>

        <h3 className="text-3xl font-bold text-orange-600 mt-3">
          {averageRating.toFixed(1)}
        </h3>

        <p className="text-gray-600 mt-2">
          Average Rating
        </p>

      </div>

    </div>
  );
}

export default RecipeStats;