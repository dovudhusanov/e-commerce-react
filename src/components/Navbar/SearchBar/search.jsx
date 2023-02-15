import React, { useState } from 'react';
import {SearchBarStyle} from "./SearchBarStyle"

function SearchBar() {
    const [query, setQuery] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    window.addEventListener("click", () => {
        setShowSearchBar(false)
    })

    const handleOpenSearchBar = (e) => {
        e.stopPropagation()
        setShowSearchBar(true)
    }

    return (
        <SearchBarStyle.Search onClick={handleOpenSearchBar}>
            <input
                type="text"
                placeholder="Search a products and categories"
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={showSearchBar ? {borderRadius: "4px 4px 0 0"} : {}}
            />
            {showSearchBar && (
                <SearchBarStyle.SearchBar>
                </SearchBarStyle.SearchBar>
            )}
        </SearchBarStyle.Search>
    );
}

export default SearchBar;
