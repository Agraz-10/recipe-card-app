import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortRecipes from "../components/SortRecipes";
import FavoriteFilter from "../components/FavoriteFilter";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";
import RecipeStats from "../components/RecipeStats";

function Recipes({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  filteredRecipes,
  sortOption,
  setSortOption,
  favorites,
  toggleFavorite,
  showFavoritesOnly,
  setShowFavoritesOnly,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-red-100">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Page Heading */}
        <div className="text-center mb-12">

          <p className="text-orange-600 uppercase tracking-[4px] font-semibold">
            Explore
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-4">
            All Recipes
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Browse authentic Nepali recipes, save your favorites,
            search by name, filter by category, and sort recipes
            to find exactly what you're looking for.
          </p>

        </div>

        <RecipeStats
          recipes={filteredRecipes}
          favorites={favorites}
        />

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Category */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">

          <SortRecipes
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          <FavoriteFilter
            showFavoritesOnly={showFavoritesOnly}
            setShowFavoritesOnly={setShowFavoritesOnly}
          />

        </div>

        {/* Recipe Cards */}
        {filteredRecipes.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            ))}

          </div>

        ) : (

          <div className="bg-white rounded-3xl shadow-lg p-12 mt-12 text-center max-w-3xl mx-auto">

            <div className="text-7xl mb-6">
              🍲
            </div>

            <h2 className="text-4xl font-bold text-gray-800">
              No Recipes Found
            </h2>

            <p className="text-gray-600 text-lg mt-5 leading-8">
              We couldn't find any recipes that match your current search.
            </p>

            <div className="mt-8 text-left inline-block">

              <p className="font-semibold text-gray-700 mb-3">
                Try one of these:
              </p>

              <ul className="space-y-2 text-gray-600">

                <li>• Search using another keyword.</li>

                <li>• Select a different category.</li>

                <li>• Turn off the Favorites filter.</li>

                <li>• Clear the search bar.</li>

              </ul>

            </div>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setShowFavoritesOnly(false);
              }}
              className="mt-10 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 cursor-pointer"
            >
              Reset Filters
            </button>

          </div>

        )}

      </section>

      <Footer />

    </div>
  );
}

export default Recipes;