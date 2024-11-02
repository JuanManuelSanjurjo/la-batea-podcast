import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) {
      const newUrl = `${window.location.pathname}?search=${encodeURIComponent(searchTerm)}`;
      window.history.pushState({ path: newUrl }, "", newUrl);

      // Reset the search input
      setSearchTerm("");
    }
  }

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Buscar posts"
          spellCheck="false"
        ></input>
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
