import React, { setState, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [ searchResults, setSearchResults ] = useState([{
    title: 'Search for songs',
    artist: ''
  }]);
  const [ search, setSearch ] = useState();
   

  return (
    <>
      <div className='banner'>
        <h1>Jammming</h1>
      </div>
      <div className='double-column'>
        <div className='search-container'>
          <SearchBar />
          <SearchResults results={searchResults} />
        </div>
        <Playlist />
      </div>
    </>
  );
}

export default App;
