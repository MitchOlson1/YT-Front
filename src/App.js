    
import './App.css';
import  { useState, useEffect } from "react";
import 'bootstrap'
import axios from 'axios'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import SearchBar from './Components/Searchbar/SearchBar';
import RelatedVideo from './Components/RelatedVideo/RelatedVideo';
import Comment from './Components/Comment/Comment';
const key = ""; //ENTER API Key here

function App() {

  const [videoIdentify, setVideoIdentify] = useState("VNWN1-lv4UY");
  const [searchTerm, setSearch] = useState(""); 
  const [vidTitle,setVidTitle] = useState(""); 
  const [vidDesc,setVidDesc] = useState("");
  
  //https://www.googleapis.com/youtube/v3/search?q=&video?id=3Huo6hdCUbk&type=video&part=snippet&key=AIzaSyDr0kAazeKsKT1Z1Nh8z3sgt1pgfhCWUZ4
  const videoSearch = async () => {
    let userSearch = await axios.get (`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${key}`)
    setVideoIdentify(userSearch.data.items[0].id.videoId);
    setVidTitle(userSearch.data.items[0].snippet.title);   
    setVidDesc(userSearch.data.items[0].snippet.description) 
    }


  const newVideo = async () => {
    let newVidInfo = await axios.get (`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoIdentify}&key=${key}`)
    setVidTitle(newVidInfo.data.items[0].snippet.title);   
    setVidDesc(newVidInfo.data.items[0].snippet.description) 
    }
     
  //console.log(`Current Video ID = ${videoIdentify}`);

  useEffect(() => {
    videoSearch(); 
  },[searchTerm])

  useEffect(() => {
    newVideo(); 
  },[videoIdentify])
 
  return (
    <div className="container">
      <SearchBar  setSearch = {setSearch}/>
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <VideoPlayer videoId={videoIdentify}  /> 
          <Comment videoId = {videoIdentify} vidTitle={vidTitle} vidDesc={vidDesc} /> 
        </div>
          <RelatedVideo relatedId={videoIdentify} apiKey={key} setVideoIdentify={setVideoIdentify} />               
      </div>           
    </div>
  );
}

export default App;
