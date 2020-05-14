import React from 'react';
import SearchResult from './SearchResult';

export default function SearchResultList() {
    return (
        <div className="search-result-list">
          <div>
            <SearchResult />
            <SearchResult />      
          </div>
          <div>
            <h3>search string</h3>
          </div>
        </div>
    )
}
