import logo from './logo.svg';
import './App.css';
import react, { useState, useEffect } from "react";
import axios from "axios"

import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import SearchBar from './Components/Searchbar/SearchBar';
// import Reply from './Components/Reply/Reply';
// import RelatedVideo from './Components/RelatedVideo/RelatedVideo';
// import Comment from './Components/Comment/Comment';

function App() {

  const [videoIdentify , SetVideoIdentify] = useState("VNWN1-lv4UY");
  const [searchTerm, setSearch] = useState("")


  const videoSearch = async () => {
    let userSearch = await axios.get (`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyBy0lgiLApihjGPQnKWwdStMMapgjRBqPI`)
    SetVideoIdentify(userSearch.data.items[0].id.videoId)
  }

  useEffect(() => {
    videoSearch();
  },[searchTerm])

  return (
    <div>
      <SearchBar  setSearch = {setSearch}/>
      <VideoPlayer videoId = {videoIdentify}  />
     
     
    
    </div>
  );
}

export default App;
