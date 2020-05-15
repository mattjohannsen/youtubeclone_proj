import React, { useState } from 'react';
import '../css/app.css';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';
import VideoPlayer from './VideoPlayer';

import RelatedSearchList from './RelatedSearchList';


function App() {
  const [ search, setSearch ] = useState("");
  //const [ selectedSearch, setSelectedSearch ] = useState("");
  const [ goSearch, setGoSearch ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Search ${search}`);
    if(search != ''){setGoSearch(true)}
    console.log(goSearch);
  }

  return (
    <div className="searchbox">
      <SearchBox 
        search={search} 
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />
      {goSearch && <SearchResultList search={search}/>}
      <VideoPlayer />
      <RelatedSearchList />
      <p>test</p>
    </div>
  );
}

export default App;
