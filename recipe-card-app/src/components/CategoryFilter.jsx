function CategoryFilter({ selectedCategory, setSelectedCategory }) {

  const categories = [
    "All",
    "Dumplings",
    "Rice",
    "Soup",
    "Meat",
    "Dessert",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
            selectedCategory === category
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-white hover:bg-orange-500 hover:text-white shadow"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}

export default CategoryFilter;