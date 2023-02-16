import React, {useRef, useState} from 'react';
import {SearchBarStyle} from "./SearchBarStyle"
import {useNavigate} from "react-router-dom";

function SearchBar({setShowCategories}) {
    const [query, setQuery] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [popularProducts, setPopularProducts] = useState(["Clothes", "Shoes", "Accessories"])
    const ref = useRef()
    const navigate = useNavigate();
    window.addEventListener("click", () => {
        setShowSearchBar(false)
    })
    const handleOpenSearchBar = (e) => {
        e.stopPropagation();
        setShowSearchBar(true);
        setShowCategories(false);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchBar(false);
        navigate(`/search?query=${query}`);
    }

    const handleClearSearch = (e) => {
        e.stopPropagation();
        setQuery("")
    }

    const handlePopularSearch = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchBar(false);
        navigate(`/search?query=${item}`);
    }

    window.addEventListener("keydown", (e) => {
        if (e.keyCode === (18 && 83)) {
            setShowSearchBar(true);
            ref.current.focus();
        }
    })
    return (
        <SearchBarStyle.Search onClick={handleOpenSearchBar}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search a products and categories"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    style={showSearchBar ? {borderRadius: "4px 4px 0 0"} : {}}
                    ref={ref}
                    required
                />
                <SearchBarStyle.ClearBtn>
                    {query ? <i className="fa-solid fa-circle-xmark" onClick={handleClearSearch}
                                style={{fontSize: "16px"}}></i> : <SearchBarStyle.Span>Alt + S</SearchBarStyle.Span>}
                </SearchBarStyle.ClearBtn>
                <SearchBarStyle.SearchBtn type="submit" onClick={handleSearch} disabled={query ? false : true}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </SearchBarStyle.SearchBtn>
            </form>
            <SearchBarStyle.SearchBar showSearchBar={showSearchBar}>
                <SearchBarStyle.RecentlySearched>
                    <SearchBarStyle.Title><h4>Recently Searched</h4><span>Clear</span></SearchBarStyle.Title>
                    <SearchBarStyle.SearchedList>
                        <div>
                            <div><i className="fa-light fa-clock"></i><span>electronics</span></div>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </SearchBarStyle.SearchedList>
                </SearchBarStyle.RecentlySearched>
                <SearchBarStyle.PopularSearched>
                    <h4>Popular</h4>
                    <SearchBarStyle.PopularList>
                        {popularProducts.map((item, index) => (
                            <li key={index} onClick={(e) => handlePopularSearch(e, item)}><i className="fa-regular fa-magnifying-glass"></i><span>{item}</span></li>
                        ))}
                    </SearchBarStyle.PopularList>
                </SearchBarStyle.PopularSearched>
            </SearchBarStyle.SearchBar>
        </SearchBarStyle.Search>
    );
}

export default SearchBar;
