import React from 'react';

function SearchBar( props ) {
   function handleUserInput(value) {
    props.updateSearch(value);
   }

   function handleSubmit( event ) {
    event.preventDefault();
    props.submitSearch(props.search);
   }

   return (
    <>
        <form  className='hoverScale' onSubmit={handleSubmit} >
            <input type="text" value={props.search} onChange={e => handleUserInput(e.target.value)} ></input>
            <button type='submit'>Search</button>
        </form>
    </>
   ) 
}

export default SearchBar;