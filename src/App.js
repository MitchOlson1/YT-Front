    
import './App.css';
import  { useState, useEffect } from "react";
import 'bootstrap'
import axios from "axios"
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import SearchBar from './Components/Searchbar/SearchBar';
// import Reply from './Components/Reply/Reply';
import RelatedVideo from './Components/RelatedVideo/RelatedVideo';
// import Comment from './Components/Comment/Comment';
const key = "AIzaSyDKis6XthS9RNm1k_1PTICkuH2bDePPEjQ";

function App() {

  const [videoIdentify, setVideoIdentify] = useState("VNWN1-lv4UY");
  const [searchTerm, setSearch] = useState(""); 
  
  const videoSearch = async () => {
    let userSearch = await axios.get (`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${key}`)
    setVideoIdentify(userSearch.data.items[0].id.videoId)
  }

  //console.log(`Current Video ID = ${videoIdentify}`);

  useEffect(() => {
    videoSearch(); 
  },[searchTerm])
 
  return (
    <div className="container">
      <SearchBar  setSearch = {setSearch}/>
      <div className="d-flex mb-3">
        <VideoPlayer videoId={videoIdentify}  />  
        <RelatedVideo relatedId={videoIdentify} apiKey={key} setVideoIdentify={setVideoIdentify} />
        
      </div>      
    </div>
  );
}

export default App;
