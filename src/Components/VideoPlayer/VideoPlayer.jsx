import axios from "axios";
import React, { useState } from "react";

const VideoPlayer = (props) => {
  
    return ( 
        <div className="p-2 flex-grow-1">
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