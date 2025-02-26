import React, {useState} from "react";
import ListingsContainer from "./ListingsContainer";
function Search() {

  const [search, setSearch] = useState("")
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    
    
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
