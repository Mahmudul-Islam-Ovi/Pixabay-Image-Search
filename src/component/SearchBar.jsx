import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-12 flex items-center justify-center "
    >
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className=" focus:outline-none focus:border-blue-500"
          placeholder="Search images"
          value={query}
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <button type="submit" className="btn  btn-active btn-accent ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
