import React from 'react';
import Track from './Track';

function TrackList( props ) {
   return (
    <ul> 
        {props.tracks.map(track => 
            <li data-key={track.title} >
                <Track title={track.title} artist={track.artist} album={track.album} imageSrc={track.imageSrc} type={props.type}  AddToPlaylist={props.AddToPlaylist} removeFromPlaylist={props.removeFromPlaylist} />
            </li>
        )}
    </ul>
   ) 
}

export default TrackList;