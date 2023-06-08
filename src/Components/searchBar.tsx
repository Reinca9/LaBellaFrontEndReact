import React from "react";


interface SearchBarProps {
  inputRef: React.RefObject<HTMLInputElement>;
  onSearch: (searchValue: string) => void; 
  
  
}

function SearchBar({ inputRef, onSearch }: SearchBarProps): JSX.Element {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
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