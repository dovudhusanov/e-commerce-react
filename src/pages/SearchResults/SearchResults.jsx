import React, {useEffect, useState} from 'react';
import {SearchResultsStyle} from "./SearchResultsStyle";
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";
import {SearchApi} from "../../api/SearchApi";

function SearchResults({searchParams}) {
    const [results, setResults] = useState([]);
    const queryName = new URLSearchParams(window.location.search).get("query")
    useEffect(() => {
        SearchApi(searchParams)
            .then((data) => setResults(data.data));
    }, [searchParams]);

    ScrollTop()
    ChangeTitle(`results for: ${queryName}`)
    return (
        <div>
            {Object.keys(results).length === 0 ? (
                <div className="container">
                    <SearchResultsStyle.NotFound>
                        <h1>Nothing was found for the search: <span>{queryName}</span> :(</h1>
                    </SearchResultsStyle.NotFound>
                </div>
            ) : (
                <>
                    {results?.map((result) => (
                        <div key={result.id}>{result.name}</div>
                    ))}
                </>
            )}
        </div>
    );
}

export default SearchResults;