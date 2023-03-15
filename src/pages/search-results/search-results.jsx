import React, {useEffect, useState} from 'react';
import {SearchResultsStyles} from "./search-results.styles";
import {SearchApi} from "../../api/search-api";
import {useSelector} from "react-redux";
import Products from "../../components/products/products";
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
                    <SearchResultsStyles.NotFound>
                        <h1>Nothing was found for the search: <span>{queryName}</span> :(</h1>
                    </SearchResultsStyles.NotFound>
                </div>
            ) : (
                <>
                    <div className="container">
                        <h1>Search Results by Query "{queryName}"</h1>
                        <SearchResultsStyles.Parent>
                            <SearchResultsStyles.SearchProducts>
                                <Products
                                    products={filteredProducts}
                                />
                            </SearchResultsStyles.SearchProducts>
                        </SearchResultsStyles.Parent>
                    </div>
                </>
            )}
        </div>
    );
}

export default SearchResults;