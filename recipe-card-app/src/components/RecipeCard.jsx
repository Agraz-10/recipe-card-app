function RecipeCard() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
        alt="Creamy Pasta"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">
          Creamy Pasta
        </h2>

        <p className="text-gray-600 mb-2">
          ⏱ Cooking Time: 25 mins
        </p>

        <p className="text-green-600 font-semibold mb-3">
          ⭐ Easy
        </p>

        <h3 className="font-semibold mb-2">
          Ingredients
        </h3>

        <ul className="list-disc ml-5 text-gray-700">
          <li>Pasta</li>
          <li>Fresh Cream</li>
          <li>Garlic</li>
          <li>Parmesan Cheese</li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeCard;