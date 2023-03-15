import React, {useCallback, useRef, useState} from 'react';
import {SearchBarStyles} from "./search-bar.styles"
import {useNavigate} from "react-router-dom";
import {ScrollTop} from "../../../../middleware";

function SearchBar({setShowCategories}) {
    const [query, setQuery] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [popularProducts, setPopularProducts] = useState(["Clothes", "Shoes", "Accessories"])
    const [resentSearch, setResentSearch] = useState([])
    const ref = useRef()
    const navigate = useNavigate();

    localStorage.setItem("recently-search", JSON.stringify(resentSearch))

    window.addEventListener("click", () => {
        setShowSearchBar(false)
    })

    const handleOpenSearchBar = (e) => {
        e.stopPropagation();
        setShowSearchBar(true);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchBar(false);
        setFullscreen(false);
        navigate(`/search?query=${query}`);
        setResentSearch([...resentSearch, {resentVal: query}])
        ScrollTop()
    }

    const handleRecentlySearch = (e, resentItem) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchBar(false);
        setFullscreen(false);
        navigate(`/search?query=${resentItem}`);
        JSON.parse(localStorage.getItem("recently-search"))
        ScrollTop()
    }

    const handleDeleteResentSearched = (e, index) => {
        const newResent = [...resentSearch];
        newResent.splice(index, 1);
        setResentSearch(newResent);
        e.stopPropagation();
    }

    const handleClearSearch = (e) => {
        e.stopPropagation();
        setQuery("")
    }

    const handlePopularSearch = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchBar(false);
        setFullscreen(false);
        navigate(`/search?query=${item}`);
        ScrollTop()
    }

    const handleBack = (e) => {
        setShowSearchBar(false);
        setFullscreen(false);
        e.stopPropagation()
    }

    return (
        <SearchBarStyles.Search onClick={handleOpenSearchBar} fullscreen={fullscreen} showSearchBar={showSearchBar}>
            <SearchBarStyles.BackIcon onClick={handleBack} fullscreen={fullscreen}>
                <i className="fa-solid fa-chevron-left"></i>
            </SearchBarStyles.BackIcon>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search a products and categories"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    ref={ref}
                    required
                    onClick={() => setFullscreen(true)}
                />
                <SearchBarStyles.ClearBtn>
                    {query ? <i className="fa-solid fa-circle-xmark" onClick={handleClearSearch}
                                style={{fontSize: "16px"}}></i> : null}
                </SearchBarStyles.ClearBtn>
                <SearchBarStyles.SearchBtn type="submit" onClick={handleSearch} disabled={query ? false : true}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </SearchBarStyles.SearchBtn>
            </form>
            <SearchBarStyles.SearchBar showSearchBar={showSearchBar} fullscreen={fullscreen}>
                {Object.keys(resentSearch).length !== 0 &&
                    <SearchBarStyles.RecentlySearched>
                        <SearchBarStyles.Title><h4>Recently Searched</h4><span>Clear</span></SearchBarStyles.Title>
                        <SearchBarStyles.SearchedList>
                            <SearchBarStyles.ResentList>
                                {resentSearch?.map((resentValue, index) => (
                                    <div key={index} onClick={(e) => handleRecentlySearch(e, resentValue.resentVal)}>
                                        <div><i className="fa-light fa-clock"></i><span>{resentValue.resentVal}</span>
                                        </div>
                                        <i className="fa-solid fa-xmark"
                                           onClick={(e) => handleDeleteResentSearched(e, index)}></i>
                                    </div>
                                ))}
                            </SearchBarStyles.ResentList>
                        </SearchBarStyles.SearchedList>
                    </SearchBarStyles.RecentlySearched>}
                <SearchBarStyles.PopularSearched>
                    <h4>Popular</h4>
                    <SearchBarStyles.PopularList>
                        {popularProducts.map((item, index) => (
                            <li key={index} onClick={(e) => handlePopularSearch(e, item)}><i
                                className="fa-regular fa-magnifying-glass"></i><span>{item}</span></li>
                        ))}
                    </SearchBarStyles.PopularList>
                </SearchBarStyles.PopularSearched>
            </SearchBarStyles.SearchBar>
        </SearchBarStyles.Search>
    );
}

export default SearchBar;
