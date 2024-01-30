import React from 'react';
import styles from '../styles/SearchBar.module.css';

function SearchBar() {
   return (
    <>
        <form className={styles.mainContainer + ' hoverScale'}>
            <input type="text" className={styles.textInput}></input>
            <button type='submit' className={styles.submitButton}>Search</button>
        </form>
    </>
   ) 
}

export default SearchBar;