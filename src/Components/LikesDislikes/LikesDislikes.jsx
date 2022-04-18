import React, { useState, useEffect } from "react";
import axios from 'axios';

const LikeDislike = (props) => {
  const [addLikes, setAddLikes] = useState("");
  const [addDislikes, setAddDislikes] = useState("");

  async function handleLikes(event){
    event.preventDefault();
    let newLike = await axios.put(`http://localhost:3006/api/comments/${props.commentId}/likes`)
      props.getComments();  
      console.log(`Likes: ${props.likes}`);
    }      
    useEffect(() => {
      handleLikes();
      },[props.commentId])

  async function handleDislikes(event){
    event.preventDefault();
    let newDislike = await axios.put(`http://localhost:3006/api/comments/${props.commentId}/dislikes`)
      props.getComments();
      console.log(`Dislikes: ${props.dislikes}`);
    }
    useEffect(() => {
      handleDislikes();
      },[props.commentId])
    
  return ( 
    <div className="rate_post text-end"> 
      <div className="d-flex">                 
        <div className="mr-3">
          Likes: {props.likes} 
          <form onSubmit = {handleLikes} >
            <input type="hidden" value="like" name="like" id="like" />
            <input type = 'submit' value = 'Add Like'/>
          </form>
        </div>
        <div className="ml-3">
          Dislikes: {props.dislikes} 
          <form onSubmit = {handleDislikes} >
            <input type="hidden" value="dislike" name="dislike" id="dislike" />
            <input type = 'submit' value = 'Add Dislike'/>
          </form>    
        </div>
      </div>
    </div>   
    );
}
 
export default LikeDislike;