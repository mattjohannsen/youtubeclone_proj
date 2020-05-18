import React, { useEffect } from 'react';
import SearchResult from './SearchResult';
import axios from 'axios';

export default function SearchResultList( props ) {
    const {
      search
    } = props;

    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=fishing&type=video&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
          .then(response => {
            console.log(response.data)
          });
      }, []);

    return (
        <div className="search-result-list">
            <SearchResult />
            <SearchResult />
            <span>\{search}\</span>
        </div>
    )
}
