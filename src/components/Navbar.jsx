import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = () => {
    // Already on Home
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
        });
      }

      return;
    }

    // Navigate from another page
    navigate("/");

    setTimeout(() => {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

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
            to="/shopping-list"
            className={({ isActive }) =>
              `font-semibold transition ${isActive
                ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                : "text-gray-700 hover:text-orange-600"
              }`
            }
          >
            Shopping List
          </NavLink>

          <button
            onClick={handleAboutClick}
            className="font-semibold text-gray-700 hover:text-orange-600 transition cursor-pointer"
          >
            About
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;