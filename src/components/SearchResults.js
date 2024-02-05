import React from 'react';
import TrackList from './Tracklist';

function SearchResults( props ) {
   return (
    <>
        {props.results.length !== 0 ? <TrackList tracks={props.results} type='search' AddToPlaylist={props.AddToPlaylist} /> : <p>Search for songs and add them to your Playlist!</p>}
    </>
   ) 
}

export default SearchResults;