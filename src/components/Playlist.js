import React from 'react';
import TrackList from './Tracklist';

function Playlist( props ) {
    return (
        <>
            {props.playlist ? <TrackList tracks={props.playlist.playlist} type='playlist' /> : <p>Add songs to your playlist from the search results!</p>}
            <form>
                <input type='text' value={props.playlist.name}></input>
                <button type="submit" className='hoverScale'>Save Playlist</button>
            </form>    
        </>
    )
}

export default Playlist;