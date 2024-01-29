import React from 'react';

function Track( props ) {
    return (
        <>
            <h4>{props.title}</h4>
            <h5>{props.artist}</h5>
            {props.type === 'search' ? <button>+</button> : <button>-</button>}
        </>
    )    
}

export default Track;