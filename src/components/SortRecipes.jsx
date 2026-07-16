function SortRecipes({ sortOption, setSortOption }) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8 mb-8 flex justify-end">

      <div className="flex items-center gap-3">

        <label
          htmlFor="sort"
          className="font-semibold text-gray-700"
        >
          Sort By:
        </label>

        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:border-orange-500"
        >
          <option value="default">Default</option>
          <option value="name">Name (A-Z)</option>
          <option value="rating">Highest Rated</option>
          <option value="calories">Lowest Calories</option>
          <option value="time">Quickest to Cook</option>
        </select>

      </div>

    </div>
  );
}

export default SortRecipes;