import React, { useState } from 'react';
import '../css/app.css';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';
import VideoPlayer from './VideoPlayer';
import RelatedSearchList from './RelatedSearchList';


function App() {
  const [ search, setSearch ] = useState();
  console.log(search);
  return (
    <div>
      <SearchBox />
      <SearchResultList />
      <VideoPlayer />
      <RelatedSearchList />
      <p>test</p>
    </div>
  );
}

export default App;
