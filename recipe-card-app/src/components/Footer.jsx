function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold">
              <span className="text-white">Nepali </span>
              <span className="text-orange-500">Recipe</span>
              <span className="text-white"> Book</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Discover authentic Nepali cuisine through
              traditional recipes, cooking guides, and
              delicious homemade meals.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-orange-400 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition">
                Recipes
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition">
                Contact
              </li>

            </ul>

          </div>

          {/* Project Info */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Project
            </h3>

            <p className="text-gray-400 leading-7">
              Built with React, Vite and Tailwind CSS
              as a modern frontend portfolio project.
            </p>

          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © {year} Nepali Recipe Book. All rights reserved.
          </p>

          <p className="text-gray-500">
            Developed by <span className="text-orange-500 font-semibold">Agraz Adhikari</span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;