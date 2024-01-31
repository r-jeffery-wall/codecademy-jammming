import React from 'react';
import styles from '../styles/SearchBar.module.css';

function SearchBar() {
   return (
    <>
        <form className={styles.mainContainer + ' hoverScale'}>
            <input type="text"></input>
            <button type='submit'>Search</button>
        </form>
    </>
   ) 
}

export default SearchBar;