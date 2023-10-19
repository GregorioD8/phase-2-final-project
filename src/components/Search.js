import React from "react"

function Search({ searchInput, onSearch }) {


    return (
        <div className="ui search">
        <div className="ui icon input">
          <input 
          className="prompt" 
          placeholder="Type to search..."
          value={searchInput}
          onChange={(e) => onSearch(e.target.value)}
          />
          <i className="search icon" />
        </div>
      </div>

)
}
export default Search 