import React, {useState} from 'react';
import {SearchBarStyle} from "./SearchBarStyle"
import {useNavigate} from "react-router-dom";

function SearchBar({setShowCategories}) {
    const [query, setQuery] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    const navigate = useNavigate();

    window.addEventListener("click", () => {
        setShowSearchBar(false)
    })

    const handleOpenSearchBar = (e) => {
        e.stopPropagation()
        setShowSearchBar(true)
        setShowCategories(false)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setShowSearchBar(false);
        navigate(`/search?query=${query}`);
    }

    return (
        <SearchBarStyle.Search onClick={handleOpenSearchBar}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search a products and categories"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    style={showSearchBar ? {borderRadius: "4px 4px 0 0"} : {}}
                    required
                />
                <SearchBarStyle.ClearBtn>
                    {query && <i className="fa-solid fa-circle-xmark" onClick={() => setQuery("")}
                                 style={{fontSize: "16px"}}></i>}
                </SearchBarStyle.ClearBtn>
                <SearchBarStyle.SearchBtn type="submit" onClick={handleSearch} disabled={query ? false : true}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </SearchBarStyle.SearchBtn>
            </form>
            {showSearchBar && (
                <SearchBarStyle.SearchBar>
                </SearchBarStyle.SearchBar>
            )}
        </SearchBarStyle.Search>
    );
}

export default SearchBar;
