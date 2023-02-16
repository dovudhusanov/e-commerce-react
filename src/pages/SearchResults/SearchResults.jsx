import React, {useEffect, useState} from 'react';
import {SearchResultsStyle} from "./SearchResultsStyle";
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";

function SearchResults({searchParams}) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`/api/search?query=${searchParams}`)
            .then((response) => response.json())
            .then((data) => setResults(data.data));
    }, [searchParams]);

    ScrollTop()
    ChangeTitle(`results for: ${searchParams}`)

    return (
        <div>
            {Object.keys(results).length === 0 ? (
               <div className="container">
                   <SearchResultsStyle.NotFound>
                       <h1>Nothing was found for the search: <span>{searchParams}</span> :(</h1>
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