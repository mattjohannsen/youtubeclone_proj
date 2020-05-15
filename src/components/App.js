import React, { useState } from 'react';
import '../css/app.css';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';
import VideoPlayer from './VideoPlayer';
import RelatedSearchList from './RelatedSearchList';


function App() {
  const [ search, setSearch ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Search ${search}`)
  }

  return (
    <div className="searchbox">
      <SearchBox 
        search={search} 
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />
      <SearchResultList search={search}/>
      <VideoPlayer />
      <RelatedSearchList />
      <p>test</p>
    </div>
  );
}

export default App;
