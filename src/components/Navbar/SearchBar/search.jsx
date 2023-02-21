import React, {useCallback, useRef, useState} from 'react';
import {SearchBarStyle} from "./SearchBarStyle"
import {useNavigate} from "react-router-dom";
import {ScrollTop} from "../../../middleware/scrollTop";

function SearchBar({setShowCategories}) {
    const [query, setQuery] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [popularProducts, setPopularProducts] = useState(["Clothes", "Shoes", "Accessories"])
    const [resentSearch, setResentSearch] = useState([])
    const ref = useRef()
    const navigate = useNavigate();

    localStorage.setItem("resently-rearch", JSON.stringify(resentSearch))

    window.addEventListener("click", () => {
        setShowSearchBar(false)
    })

    const handleOpenSearchBar = useCallback((e) => {
        e.stopPropagation();
        setShowSearchBar(true);
        setShowCategories(false);
    })

    const handleSearch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchBar(false);
        setFullscreen(false);
        navigate(`/search?query=${query}`);
        setResentSearch([...resentSearch, {resentVal: query}])
        ScrollTop()
    }

    const handleResentlySearch = (e, resentItem) => {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchBar(false);
        setFullscreen(false);
        navigate(`/search?query=${resentItem}`);
        JSON.parse(localStorage.getItem("resently-rearch"))
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

    window.addEventListener("keydown", (e) => {
        if (e.keyCode === (83 && 18)) {
            setShowSearchBar(true);
            ref.current.focus();
        }
    })

    return (
        <SearchBarStyle.Search onClick={handleOpenSearchBar} fullscreen={fullscreen} showSearchBar={showSearchBar}>
            <SearchBarStyle.BackIcon onClick={handleBack} fullscreen={fullscreen}>
                <i className="fa-solid fa-chevron-left"></i>
            </SearchBarStyle.BackIcon>
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
                <SearchBarStyle.ClearBtn>
                    {query ? <i className="fa-solid fa-circle-xmark" onClick={handleClearSearch}
                                style={{fontSize: "16px"}}></i> : <SearchBarStyle.Span>Alt + S</SearchBarStyle.Span>}
                </SearchBarStyle.ClearBtn>
                <SearchBarStyle.SearchBtn type="submit" onClick={handleSearch} disabled={query ? false : true}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </SearchBarStyle.SearchBtn>
            </form>
            <SearchBarStyle.SearchBar showSearchBar={showSearchBar} fullscreen={fullscreen}>
                {Object.keys(resentSearch).length !== 0 &&
                    <SearchBarStyle.RecentlySearched>
                        <SearchBarStyle.Title><h4>Recently Searched</h4><span>Clear</span></SearchBarStyle.Title>
                        <SearchBarStyle.SearchedList>
                            <SearchBarStyle.ResentList>
                                {resentSearch?.map((resentValue, index) => (
                                    <div key={index} onClick={(e) => handleResentlySearch(e, resentValue.resentVal)}>
                                        <div><i className="fa-light fa-clock"></i><span>{resentValue.resentVal}</span>
                                        </div>
                                        <i className="fa-solid fa-xmark"
                                           onClick={(e) => handleDeleteResentSearched(e, index)}></i>
                                    </div>
                                ))}
                            </SearchBarStyle.ResentList>
                        </SearchBarStyle.SearchedList>
                    </SearchBarStyle.RecentlySearched>}
                <SearchBarStyle.PopularSearched>
                    <h4>Popular</h4>
                    <SearchBarStyle.PopularList>
                        {popularProducts.map((item, index) => (
                            <li key={index} onClick={(e) => handlePopularSearch(e, item)}><i
                                className="fa-regular fa-magnifying-glass"></i><span>{item}</span></li>
                        ))}
                    </SearchBarStyle.PopularList>
                </SearchBarStyle.PopularSearched>
            </SearchBarStyle.SearchBar>
        </SearchBarStyle.Search>
    );
}

export default SearchBar;
