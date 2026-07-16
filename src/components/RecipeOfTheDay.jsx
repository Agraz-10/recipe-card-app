import { useState } from "react";
import { Link } from "react-router-dom";
import { Dice5 } from "lucide-react";

function RecipeOfTheDay({ recipes }) {
  // Recipe based on today's date
  const today = new Date().getDate();

  const [recipe, setRecipe] = useState(
    recipes[today % recipes.length]
  );

  const handleRandomRecipe = () => {
    const randomIndex = Math.floor(
      Math.random() * recipes.length
    );

    setRecipe(recipes[randomIndex]);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">

      {/* Heading */}
      <div className="text-center mb-10">

        <p className="text-orange-600 uppercase tracking-[4px] font-semibold">
          Today's Pick
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Recipe of the Day
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          Every day we feature one authentic Nepali recipe.
          Want something different? Click <strong>Surprise Me</strong>.
        </p>

      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 hover:shadow-2xl transition-all duration-300">

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

        {/* Content */}
        <div className="p-10 flex flex-col justify-center">

          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold w-fit">
            🔥 Featured Today
          </span>

          <h2 className="text-5xl font-bold mt-6 text-gray-800">
            {recipe.name}
          </h2>

          <p className="text-orange-600 font-semibold mt-3">
            {recipe.category}
          </p>

          <p className="text-gray-600 leading-8 mt-6">
            {recipe.description}
          </p>

          <div className="flex gap-10 mt-8">

            <div>
              <p className="text-gray-500">
                Time
              </p>

              <h3 className="font-bold">
                {recipe.time}
              </h3>
            </div>

            <div>
              <p className="text-gray-500">
                Rating
              </p>

              <h3 className="font-bold">
                ⭐ {recipe.rating}
              </h3>
            </div>

            <div>
              <p className="text-gray-500">
                Difficulty
              </p>

              <h3 className="font-bold">
                {recipe.difficulty}
              </h3>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">

            <Link to={`/recipes/${recipe.id}`}>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 cursor-pointer">
                View Recipe →
              </button>
            </Link>

            <button
              onClick={handleRandomRecipe}
              className="flex items-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition duration-300 cursor-pointer"
            >
              <Dice5 size={20} />
              Surprise Me
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default RecipeOfTheDay;