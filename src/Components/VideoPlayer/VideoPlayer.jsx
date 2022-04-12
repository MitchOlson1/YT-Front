import axios from "axios";
import React, { useState } from "react";

const VideoPlayer = (props) => {
    // this.state = { 
    //         relatedVids:[],
    //         currentVid : [],
    //         key: 'AIzaSyBy0lgiLApihjGPQnKWwdStMMapgjRBqPI'
    //      };
    //     componentDidMount();{
    //         this.relatedVids()
    //         this.currentVid()
    //     };
       
    //     currentVid = async() =>{
    //         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.props.videoId}&key=${AIzaSyBy0lgiLApihjGPQnKWwdStMMapgjRBqPI}`,this.state.currentVid)
    //         this.setState({
    //             currentVid : response.data.items[0].snippet
    //         }),
    //         console.log('current vid:',this.state.currentVid)
    //     };
    
    return ( 
        <div>
        <iframe
          id="Video"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${props.videoId}`}
          frameBorder="0"
        ></iframe>
      </div>
    );
  };
  
export default VideoPlayer;