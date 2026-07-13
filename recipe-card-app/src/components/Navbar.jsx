function Navbar() {
  return (
    <nav className="bg-orange-600 text-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div>
          <h1 className="text-2xl font-bold">
            🇳🇵 Nepali Recipe Book
          </h1>
        </div>

        <ul className="flex gap-8 font-medium">

          <li>
            <a
              href="#"
              className="hover:text-yellow-300 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-yellow-300 transition"
            >
              Recipes
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-yellow-300 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-yellow-300 transition"
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