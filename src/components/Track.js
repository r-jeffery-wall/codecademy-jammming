import React from 'react';
import styles from '../styles/Track.module.css';

function Track( props ) {
    return (
        <>
            <div className={styles.infoContainer}>
                <h4 className={styles.track}>{props.title}</h4>
                <h5 className={styles.artist}>{props.artist}</h5>
                <p className={styles.album}>{props.album}</p>
            </div>
            {props.type === 'search' ? <button className={styles.button + ' hoverScale'}>+</button> : <button className={styles.button + ' hoverScale'}>-</button>}
        </>
    )    
}

export default Track;