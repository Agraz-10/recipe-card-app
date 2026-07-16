import {
  BookOpen,
  UtensilsCrossed,
  Heart,
  Star,
} from "lucide-react";

function RecipeStats({ recipes, favorites }) {
  const totalRecipes = recipes.length;

  const totalCategories = new Set(
    recipes.map((recipe) => recipe.category)
  ).size;

  const averageRating =
    totalRecipes > 0
      ? (
          recipes.reduce(
            (sum, recipe) => sum + recipe.rating,
            0
          ) / totalRecipes
        ).toFixed(1)
      : "0.0";

  const stats = [
    {
      icon: <BookOpen size={36} />,
      value: totalRecipes,
      title: "Recipes",
      description: "Available Recipes",
    },
    {
      icon: <UtensilsCrossed size={36} />,
      value: totalCategories,
      title: "Categories",
      description: "Food Categories",
    },
    {
      icon: <Heart size={36} />,
      value: favorites.length,
      title: "Favorites",
      description: "Saved Recipes",
    },
    {
      icon: <Star size={36} />,
      value: averageRating,
      title: "Rating",
      description: "Average Score",
    },
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-12">

      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >

          <div className="flex justify-center text-orange-600">
            {stat.icon}
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mt-5">
            {stat.value}
          </h2>

          <h3 className="text-xl font-semibold mt-2">
            {stat.title}
          </h3>

          <p className="text-gray-500 mt-2">
            {stat.description}
          </p>

        </div>
      ))}

    </section>
  );
}

export default RecipeStats;