function FavoriteFilter({
  showFavoritesOnly,
  setShowFavoritesOnly,
}) {
  return (
    <div>
      <button
        onClick={() =>
          setShowFavoritesOnly(!showFavoritesOnly)
        }
        className={`px-5 py-2 rounded-lg font-semibold transition cursor-pointer ${
          showFavoritesOnly
            ? "bg-red-500 text-white"
            : "bg-white border text-gray-700"
        }`}
      >
        {showFavoritesOnly
          ? "Showing Favorites ❤️"
          : "Show Favorites 🤍"}
      </button>
    </div>
  );
}

export default FavoriteFilter;