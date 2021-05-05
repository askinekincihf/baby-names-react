import React from 'react';

const Search = ({ searchInput, handleSearchChange}) => {

    return (
        <div className="search">
            <input
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Search for a name..."
                >
            </input>
        </div>
    )
}

export default Search;
