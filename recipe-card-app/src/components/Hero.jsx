function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}

        <div>

          <p className="text-orange-600 font-semibold uppercase tracking-wider">
            Welcome to Nepali Recipe Book
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4 leading-tight">
            Discover Authentic
            <span className="text-orange-600"> Nepali Cuisine</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Explore Nepal's most loved traditional dishes with
            detailed recipes, cooking guides, nutrition facts,
            and step-by-step instructions for every meal.
          </p>

          <button
            className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 cursor-pointer shadow-lg"
          >
            Browse Recipes
          </button>

        </div>

        {/* Right Content */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
            alt="Nepali Food"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;