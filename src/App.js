import React, { setState, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './util/Spotify';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);

  const [ search, setSearch ] = useState('Search here.');
  const [ playlist, setPlaylist ] = useState([]);
  const [ playlistTitle, setPlaylistTitle ] = useState('Playlist name')
   
  function AddToPlaylist(event) {
    const trackTitle = event.target.parentElement.getAttribute('data-key');
    const trackToAdd = searchResults.filter(track => track.title === trackTitle)[0];

    setPlaylist((prev) => [trackToAdd, ...prev]);
  }

  function removeFromPlaylist(event) {
    const trackTitle = event.target.parentElement.getAttribute('data-key');
    const newPlaylist = playlist.filter(track => track.title !== trackTitle);

    setPlaylist(newPlaylist);
  }
  
  function updatePlaylistTitle(newTitle) {
    setPlaylistTitle(newTitle);
  }

  function updateSearch(newSearch) {
    setSearch(newSearch)
  }

  function savePlaylist( playlist, playlistTitle) {
    const Uris = playlist.map(track => track.uri);
    Spotify.savePlaylist(playlistTitle, Uris).then(setPlaylist([]));
    alert('Playlist saved to your Spotify account!');
  }

  function handleSearch(searchTerm) { 
    
    if (searchTerm === '' || searchTerm === 'Search here.' || searchTerm === 'You must specify a search term!') {
      setSearch('You must specify a search term!');
    }
    else {
      Spotify.searchTracks(searchTerm).then(setSearchResults);
      console.log(searchResults);
    }}

  return ( 
    <>
      <div className='banner'>
        <h1>Ja<span className='green'>mmm</span>ing</h1>
        <h2>A Spotify Playlist App</h2>
      </div>
      <div className='double-column'>
        <div className='column-div'>
          <SearchBar search={search} updateSearch={updateSearch} submitSearch={handleSearch} />
          <SearchResults results={searchResults} AddToPlaylist={AddToPlaylist} />
        </div>
        <div className='column-div'>
          <Playlist playlist={playlist} title={playlistTitle} removeFromPlaylist={removeFromPlaylist} updatePlaylistTitle={updatePlaylistTitle} savePlaylist={savePlaylist} />
        </div>
      </div>
    </>
  );
}

export default App;
