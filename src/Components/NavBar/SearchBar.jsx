import React, { useState } from "react";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="relative flex justify-center">

      {/* Desktop UI */}
      <label className="hidden lg:flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 w-80 border border-transparent focus-within:border-yellow-500 transition duration-150">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-white placeholder-white/60 flex-1"
        />
      </label>

      {/* Mobile UI */}
      <div className="flex lg:hidden items-center">
        {!showSearch && (
          <button
            onClick={() => setShowSearch(true)}
            className="p-1 bg-white/10 rounded-full"
          >
            <svg
              className="h-5 w-5 opacity-70 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </button>
        )}

        {showSearch && (
          <label className="flex items-center bg-white/10 rounded-full px-3 py-1 w-3/4 border border-yellow-500 transition duration-150">
            <input
              type="search"
              required
              autoFocus
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white placeholder-white/60 flex-1"
            />
            <button
              onClick={() => setShowSearch(false)}
              className="ml-1 text-white font-bold"
            >
              ❌
            </button>
          </label>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
