function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-xl mx-auto mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search Nepali recipes..."
        className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}

export default SearchBar;