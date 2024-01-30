import React, { setState, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [ searchResults, setSearchResults ] = useState([{
    title: 'Search for songs',
    artist: '',
    album: ''
  }]);
  const [ search, setSearch ] = useState();
   

  return ( 
    <>
      <div className='banner'>
        <h1>Ja<span className='green'>mmm</span>ing</h1>
        <h2>A Spotify Playlist App</h2>
      </div>
      <div className='double-column'>
        <div className='search-container'>
          <SearchBar />
          <SearchResults results={searchResults} />
        </div>
        <div>
          <Playlist />
        </div>
      </div>
    </>
  );
}

export default App;
