import React from "react";

interface SearchBarProps {
  inputRef: React.RefObject<HTMLInputElement>;
  onSearch: (searchValue: string) => void; // Add the onSearch prop
}

function SearchBar({ inputRef, onSearch }: SearchBarProps): JSX.Element {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    // Invoke the onSearch function with the search value
    onSearch(searchValue);
  };

  return (
    <div>
      <input
        ref={inputRef}
        className="searchBar"
        type="text"
        placeholder="Rechercher"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;