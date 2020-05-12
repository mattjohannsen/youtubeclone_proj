import React from 'react';
import '../css/app.css';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';

function App() {
  return (
    <div>
      <SearchBox />
      <SearchResultList />
    </div>
  );
}

export default App;
