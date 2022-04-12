// const SearchBar = (props) => {
    function handleSubmit(event){
        event.preventDefault()
        let query = document.getElementById("searchBarText").value
        console.log(query)
        props.parseSearch(query)
    }
//     return ( 
    <div>
    <input type="text" name="Search" id="searchBarText" onKeyUp={function(event) {if (event.key == 'Enter'){
        handleSubmit(event)
    }}}/>
    <button type="submit" onClick={(event) => handleSubmit(event)}>Search</button>
</div>
//      );
// }
 
// export default SearchBar;