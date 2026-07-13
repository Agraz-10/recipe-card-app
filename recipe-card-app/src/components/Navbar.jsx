function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-gray-800">Nepali </span>
            <span className="text-orange-600">Recipe</span>
            <span className="text-gray-800"> Book</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 font-medium text-gray-700">

          <li>
            <a
              href="#"
              className="hover:text-orange-600 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-orange-600 transition duration-300"
            >
              Recipes
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-orange-600 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-orange-600 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;