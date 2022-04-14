import React from "react";

const SearchBar = (props) => {
    
    function handleSubmit(event){
        event.preventDefault();
        props.setSearch(event.target.search.value);
        event.target.search.value = "";
    }
    return ( 
        <form onSubmit = {(event) => handleSubmit (event)}>
            <input type="text" name="Search" id="search"/> 
            <button type="submit" >Search</button>
        </form>
     );
}
 
export default SearchBar;