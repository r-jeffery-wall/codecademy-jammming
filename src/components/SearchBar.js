import React from 'react';
import styles from '../styles/SearchBar.module.css';

function SearchBar( props ) {
   function handleUserInput(value) {
    props.updateSearch(value);
   }

   return (
    <>
        <form className={styles.mainContainer + ' hoverScale'}>
            <input type="text" value={props.search} onChange={e => handleUserInput(e.target.value)} ></input>
            <button type='submit'>Search</button>
        </form>
    </>
   ) 
}

export default SearchBar;