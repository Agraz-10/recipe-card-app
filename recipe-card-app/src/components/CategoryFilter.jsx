function CategoryFilter() {
  const categories = [
    "All",
    "🥟 Dumplings",
    "🍚 Rice",
    "🍜 Soup",
    "🍖 Meat",
    "🍩 Dessert",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-5 py-2 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition duration-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;