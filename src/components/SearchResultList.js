import React from 'react';
import SearchResult from './SearchResult';

export default function SearchResultList( props ) {
    const {
      search
    } = props;

    return (
        <div className="search-result-list">
            <SearchResult />
            <SearchResult />
            <span>\{search}\</span>
        </div>
    )
}
