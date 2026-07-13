function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="bg-white rounded-3xl shadow-lg p-10">

        <p className="text-orange-600 uppercase tracking-[4px] font-semibold text-center">
          About Nepali Cuisine
        </p>

        <h2 className="text-4xl font-bold text-center text-gray-800 mt-4">
          A Taste of Nepal
        </h2>

        <p className="text-gray-600 text-lg leading-8 mt-8 text-center max-w-4xl mx-auto">
          Nepali cuisine reflects the country's rich culture, geography, and traditions.
          From the snowy Himalayan region to the fertile plains of the Terai, every
          part of Nepal offers unique flavors and cooking styles. Meals are prepared
          using fresh ingredients, aromatic spices, and recipes that have been passed
          down through generations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="text-center">
            <div className="text-5xl mb-4">🥟</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Traditional Dishes
            </h3>
            <p className="text-gray-600 mt-2">
              Enjoy authentic recipes like Momo, Dal Bhat, Sel Roti, Thukpa, and Sekuwa.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Fresh Ingredients
            </h3>
            <p className="text-gray-600 mt-2">
              Nepali food uses seasonal vegetables, herbs, spices, and locally sourced ingredients.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Cook with Love
            </h3>
            <p className="text-gray-600 mt-2">
              Every meal tells a story of family, tradition, and hospitality that brings people together.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;