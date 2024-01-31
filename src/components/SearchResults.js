import React from 'react';
import TrackList from './Tracklist';

function SearchResults( props ) {
   return (
    <>
        <TrackList tracks={props.results} type='search' AddToPlaylist={props.AddToPlaylist} />
    </>
   ) 
}

export default SearchResults;