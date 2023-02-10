import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context";

const SearchForm = () => {
  const appContext = useContext(AppContext);
  const { searchTerm, setSearchTerm } = appContext;
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            value={searchTerm}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
