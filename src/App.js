    
import './App.css';
import react, { useState, useEffect } from "react";
import axios from "axios"

import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import SearchBar from './Components/Searchbar/SearchBar';
// import Reply from './Components/Reply/Reply';
// import RelatedVideo from './Components/RelatedVideo/RelatedVideo';
// import Comment from './Components/Comment/Comment';
const key = "AIzaSyBRhOrpnjkO4ITXcTS_eAQsbjX8WNlA88s";

function App() {

  const [videoIdentify, setVideoIdentify] = useState("VNWN1-lv4UY");
  const [searchTerm, setSearch] = useState("");
  const [relatedVideoList, setRelatedVideoList] = useState([]);


  const videoSearch = async () => {
    let userSearch = await axios.get (`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${key}`)
    setVideoIdentify(userSearch.data.items[0].id.videoId)
  }

  //console.log(`Current Video ID = ${videoIdentify}`);

  const relatedVideos = async () => {
    let videoList = await axios.get (`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoIdentify??"VNWN1-lv4UY"}&type=video&key=${key}`)
    setRelatedVideoList(videoList.data.items);
    //console.log(relatedVideoList);
  }

  useEffect(() => {
    relatedVideos();
  },[videoIdentify])

  useEffect(() => {
    videoSearch();
  },[searchTerm])
 
  return (
    <div className="container">
      <SearchBar  setSearch = {setSearch}/>
      <div className="d-flex mb-3">
        <VideoPlayer videoId = {videoIdentify}  />  
        <div>
            <h3>Related Vids</h3>
            
              {relatedVideoList.map((video) => {
                let thumbURL = `https://img.youtube.com/vi/${video.id.videoId}/1.jpg`;                
              return (                
                <div className="m-2">                 
                    <img src={thumbURL} width="150"  />
                </div>
              )
            })
              
            }            
            
        </div>
      </div>      
    </div>
  );
}

export default App;
