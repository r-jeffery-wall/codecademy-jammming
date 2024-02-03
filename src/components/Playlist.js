import React from 'react';
import TrackList from './Tracklist';

function Playlist( props ) {
    function handleUserInput(value) {
        props.updatePlaylistTitle(value);
    }
    
    function handleSubmit( event ) {
        event.preventDefault();
        props.savePlaylist(props.playlist, props.title);
    }

    return (
        <>
            {props.playlist.length !== 0 ? <TrackList tracks={props.playlist} type='playlist' removeFromPlaylist={props.removeFromPlaylist} /> : <p>Add songs to your playlist from the search results!</p>}
            <form onSubmit={handleSubmit}>
                <input type='text' value={props.title} onChange={e => handleUserInput(e.target.value)}></input>
                <button type="submit" className='hoverScale'>Save Playlist</button>
            </form>    
        </>
    )
}

export default Playlist;