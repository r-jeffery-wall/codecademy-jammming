import React, { setState, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [ searchResults, setSearchResults ] = useState([{
    title: 'Felt Mountain',
    artist: 'Goldfrapp',
    album: 'Felt Mountain'
  },{
    title: 'Banquet',
    artist: 'Yann Tiersen',
    album: 'Amelie from Montmarte'
  }]);
  const [ search, setSearch ] = useState();
  const [ playlist, setPlaylist ] = useState({
    name: 'Playlist name',
    playlist: [{
    title: 'Felt Mountain',
    artist: 'Goldfrapp',
    album: 'Felt Mountain'
  }]});
   

  return ( 
    <>
      <div className='banner'>
        <h1>Ja<span className='green'>mmm</span>ing</h1>
        <h2>A Spotify Playlist App</h2>
      </div>
      <div className='double-column'>
        <div className='column-div'>
          <SearchBar />
          <SearchResults results={searchResults} />
        </div>
        <div className='column-div'>
          <Playlist playlist={playlist}/>
        </div>
      </div>
    </>
  );
}

export default App;
