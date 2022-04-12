import './App.css';
import react, { useState, useEffect } from "react";

import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
// import SearchBar from './Components/Searchbar/SearchBar';
// import Reply from './Components/Reply/Reply';
// import RelatedVideo from './Components/RelatedVideo/RelatedVideo';
// import Comment from './Components/Comment/Comment';

function App() {

  const [videoIdentify , SetVideoIdentify] = useState("VNWN1-lv4UY")

  return (
    <div>
      <VideoPlayer videoId = {videoIdentify}  />
     
    
    </div>
  );
}

export default App;
