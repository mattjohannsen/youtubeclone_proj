import React from 'react';
import '../css/app.css';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div>
      <SearchBox />
      <SearchResultList />
      <VideoPlayer />
    </div>
  );
}

export default App;
