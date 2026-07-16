function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-2xl mx-auto mb-8">

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search Nepali recipes..."
        className="w-full px-6 py-4 rounded-full border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

    </div>
  );
}

export default SearchBar;