import React from 'react';
import TrackList from './Tracklist';

function Playlist( props ) {
    function handleUserInput(value) {
        props.updatePlaylistTitle(value);
    }
    
    return (
        <>
            {props.playlist.length !== 0 ? <TrackList tracks={props.playlist} type='playlist' removeFromPlaylist={props.removeFromPlaylist} /> : <p id='addSongs'>Add songs to your playlist from the search results!</p>}
            <form>
                <input type='text' value={props.title} onChange={e => handleUserInput(e.target.value)}></input>
                <button type="submit" className='hoverScale'>Save Playlist</button>
            </form>    
        </>
    )
}

export default Playlist;