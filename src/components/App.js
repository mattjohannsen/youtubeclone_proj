import React, { useState } from 'react';
import '../css/app.css';
import SearchBox from './SearchBox';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

import RelatedVideoList from './RelatedVideoList';


function App() {
  const [ searchphrase, setSearchPhrase ] = useState("");
  //const [ selectedSearch, setSelectedSearch ] = useState("");
  const [ goSearch, setGoSearch ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Search ${searchphrase}`);
    if(searchphrase != ""){setGoSearch(true)}
    console.log(goSearch);
  }

  return (
    <div className="searchbox">
      <SearchBox 
        searchphrase={searchphrase} 
        setSearchPhrase={setSearchPhrase}
        handleSubmit={handleSubmit}
      />
      {goSearch && <VideoList searchphrase={searchphrase} />}
      <VideoPlayer />
      <RelatedVideoList />
      <p>{searchphrase}</p>
    </div>
  );
}

export default App;
