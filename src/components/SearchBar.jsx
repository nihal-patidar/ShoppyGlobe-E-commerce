import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../redux/searchSlice";

function SearchBar() {
  // Local state for managing search input value
  const searchQuery = useSelector((store)=> store.search.item);
  const [query, setQuery] = useState("");

  // Redux dispatch function for updating global search state
  const dispatch = useDispatch();

  /**
   * Handles search submission when the Enter key is pressed.
   * Prevents dispatching empty or whitespace-only queries.
   */
  function handleSearch(e) {
    // Only trigger search on Enter key press
    if (e.key !== "Enter") return;

    const trimmedQuery = query.trim();

    // Prevent empty searches
    if (trimmedQuery === searchQuery) return;

    dispatch(setSearchItem(trimmedQuery));

    setQuery("")
  }

  /**
   * Updates local search query state as the user types.
   */
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div
      className="
        order-3
        w-full
        md:order-2
        md:flex-1
        md:max-w-xl
      "
    >
      <div className="relative">
        {/* Search input field */}
        <input
          type="text"
          aria-label="Search products"
          placeholder="Search products... & Press Enter"
          className="
            w-full
            h-12
            rounded-2xl
            pl-12
            pr-4
            bg-white/5
            border
            border-[var(--border-color)]
            text-[var(--text-primary)]
            placeholder:text-[var(--text-secondary)]
            outline-none
            focus:border-[var(--accent)]
            focus:ring-2
            focus:ring-[var(--accent)]/20
            transition-all
          "
          value={query}
          onChange={handleChange}
          onKeyDown={handleSearch}
        />

        {/* Decorative search icon */}
        <span
          aria-hidden="true"
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-[var(--text-secondary)]
            pointer-events-none
          "
        >
          🔍
        </span>
      </div>
    </div>
  );
}

export default SearchBar;