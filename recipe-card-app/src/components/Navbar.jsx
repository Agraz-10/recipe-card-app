import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold"
        >
          <span className="text-gray-800">🍲 Nepali </span>
          <span className="text-orange-600">Recipe</span>
          <span className="text-gray-800"> Book</span>
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold transition ${isActive
                ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                : "text-gray-700 hover:text-orange-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `font-semibold transition ${isActive
                ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                : "text-gray-700 hover:text-orange-600"
              }`
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/"
            className="font-semibold text-gray-700 hover:text-orange-600 transition"
          >
            About
          </NavLink>

          <a
            href="#about"
            className="font-semibold text-gray-700 hover:text-orange-600 transition"
          >
            About
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;