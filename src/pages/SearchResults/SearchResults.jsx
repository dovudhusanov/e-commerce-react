import React, {useEffect, useState} from 'react';
import {SearchResultsStyle} from "./SearchResultsStyle";
import {SearchApi} from "../../api/SearchApi";
import {useSelector} from "react-redux";
import Products from "../../components/Products/Products";
import {ChangeTitle, ScrollTop} from "../../middleware";

function SearchResults({searchParams}) {
    const [results, setResults] = useState([]);
    const queryName = new URLSearchParams(window.location.search).get("query")
    // useEffect(() => {
    //     SearchApi(searchParams)
    //         .then((data) => setResults(data.data));
    // }, [searchParams]);

    ScrollTop()
    ChangeTitle(`results for: ${queryName}`)

    const products = useSelector(state => state.ProductsReducer.products)

    const filteredProducts = products.filter(product =>
        product?.productName?.toLowerCase().includes(queryName.toLowerCase()) ||
        product?.category?.toLowerCase().includes(queryName.toLowerCase()) ||
        product?.descr?.toLowerCase().includes(queryName.toLowerCase())
    );

    filteredProducts.map(ma => console.log(ma))

    return (
        <div>
            {Object.keys(filteredProducts).length === 0 ? (
                <div className="container">
                    <SearchResultsStyle.NotFound>
                        <h1>Nothing was found for the search: <span>{queryName}</span> :(</h1>
                    </SearchResultsStyle.NotFound>
                </div>
            ) : (
                <>
                    <div className="container">
                        <h1>Search Results by Query "{queryName}"</h1>
                        <SearchResultsStyle.Parent>
                            <SearchResultsStyle.SearchProducts>
                                <Products
                                    products={filteredProducts}
                                />
                            </SearchResultsStyle.SearchProducts>
                        </SearchResultsStyle.Parent>
                    </div>
                </>
            )}
        </div>
    );
}

export default SearchResults;