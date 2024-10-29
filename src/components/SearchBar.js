import React, { useState, useEffect, useRef } from "react";
import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-scroll";
import styles from "./SearchBar.module.css";

// Importa los datos del catálogo
import { fundas } from "./Catalog";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchCatalog = (searchQuery) => {
    if (searchQuery.length < 1) return [];

    const lowercaseQuery = searchQuery.toLowerCase();

    const modelResults = fundas.flatMap((funda) =>
      funda.models
        .filter((model) => model.name.toLowerCase().includes(lowercaseQuery))
        .map((model) => ({
          type: "model",
          name: model.name,
          url: model.url,
          material: funda.type,
        }))
    );

    return [...modelResults];
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setResults(searchCatalog(value));
    setIsOpen(value.length >= 1);
  };

  const handleSelectResult = (result) => {
    setQuery("");
    setIsOpen(false);
    if (result.type === "model" && result.url) {
      window.open(result.url, "_blank");
    } else if (result.type === "material") {
      console.log(`Filtrar por material: ${result.id}`);
    }
  };

  return (
    <div className={styles.search__center} ref={searchRef}>
      <div className={styles.search__container}>
        <input
          type="text"
          placeholder="Buscar modelo de auto..."
          className={styles.search__input}
          value={query}
          onChange={handleSearch}
          aria-label="Buscar fundas de auto"
          aria-controls="search-results"
        />
        <button className={styles.search__button}>
          <IconSearch size={25} color="white" />
        </button>
        {isOpen && (
          <ul
            id="search-results"
            className={styles.results__list}
            role="listbox"
          >
            {results.length > 0 ? (
              results.map((result, index) => (
                <li
                  key={index}
                  className={styles.result__item}
                  onClick={() => handleSelectResult(result)}
                  role="option"
                  aria-selected={false}
                >
                  {result.type === "model" ? (
                    <>
                      <span>{result.name}</span>
                      <span className={styles.material__tag}>
                        {result.material}
                      </span>
                    </>
                  ) : (
                    <span>{result.name}</span>
                  )}
                </li>
              ))
            ) : (
              <li className={styles.result__item}>
                <Link to="contact" smooth={true} duration={500}>
                  ¿No encontraste tu modelo? Contáctanos
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
