import React from 'react';
import styles from '../styles/Track.module.css';

function Track( props ) {
    function handleAdd(event) {
        props.AddToPlaylist(event)
    }

    function handleRemove(event) {
        props.removeFromPlaylist(event);
    }

    return (
        <>
            <div className={styles.infoContainer}>
                <h4 className={styles.track}>{props.title}</h4>
                <h5 className={styles.artist}>{props.artist}</h5>
                <p className={styles.album}>{props.album}</p>
            </div>
            <img src={props.imageSrc} alt={`Albumn art for ${props.album} by ${props.artist}`} />
            {props.type === 'search' ? <button className={styles.button + ' hoverScale'} onClick={handleAdd}>+</button> : <button className={styles.button + ' hoverScale'} onClick={handleRemove} >-</button>}
        </>
    )    
}

export default Track;