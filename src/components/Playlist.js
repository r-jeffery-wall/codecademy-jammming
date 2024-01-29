import React from 'react';
import TrackList from './Tracklist';

function Playlist( props ) {
    return (
        <form>
            {props.tracks ? <TrackList tracks={props.tracks} type='playlist' /> : <p>Add songs to your playlist from the search results!</p>}
            <button type="submit">Save Playlist</button>
        </form>    
    )
}

export default Playlist;