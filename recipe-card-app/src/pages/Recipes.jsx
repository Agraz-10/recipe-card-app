import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

function Recipes({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  filteredRecipes,
  onViewRecipe,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-red-100">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <p className="text-orange-600 uppercase tracking-[4px] font-semibold">
            Explore
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-4">
            All Recipes
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Browse all traditional Nepali recipes and discover
            delicious dishes from different regions of Nepal.
          </p>

        </div>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onViewRecipe={onViewRecipe}
            />
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Recipes;