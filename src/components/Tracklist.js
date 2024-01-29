import React from 'react';
import Track from './Track';

function TrackList( props ) {
   return (
    <ul>
        {props.tracks.map(track => 
            <li>
                <Track title={track.title} artist={track.artist} type={props.type} />
            </li>
        )}
    </ul>
   ) 
}

export default TrackList;