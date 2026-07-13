import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RecipeCard from "../components/RecipeCard";
import About from "../components/About";
import Footer from "../components/Footer";

function Home({
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

      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <section className="max-w-7xl mx-auto px-6 mt-20 mb-12">

        <div className="text-center">

          <p className="text-orange-600 uppercase tracking-[4px] font-semibold">
            Traditional Dishes
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Featured Recipes
          </h2>

          <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-8">
            Discover authentic Nepali recipes carefully selected to
            showcase the rich culinary heritage of Nepal.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredRecipes.slice(0, 3).map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onViewRecipe={onViewRecipe}
            />
          ))}

        </div>

      </section>

      <About />

      <Footer />

    </div>
  );
}

export default Home;