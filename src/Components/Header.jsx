const categories = ["All", "Tech", "Travel", "Food"];

export default function Header({ search, onSearchChange, category, onCategoryChange }) {
  return (
    <header className="max-w-5xl mx-auto mb-8">
      <h1 className="text-4xl font-extrabold mb-4 text-center sm:text-left text-blue-700">
        My Personal Blog
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={search}
          onChange={onSearchChange}
          className="flex-grow px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex space-x-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-md font-semibold ${
                category === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
