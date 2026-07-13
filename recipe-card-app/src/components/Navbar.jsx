import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold"
        >
          <span className="text-gray-800">Nepali </span>
          <span className="text-orange-600">Recipe</span>
          <span className="text-gray-800"> Book</span>
        </Link>

        {/* Navigation */}

        <ul className="flex gap-8 font-medium">

          <li>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600 transition"
              }
            >
              Home
            </NavLink>

          </li>

          <li>

            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600 transition"
              }
            >
              Recipes
            </NavLink>

          </li>

          <li>

            <a
              href="#about"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              About
            </a>

          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;