import React, { useState, useEffect } from "react";
import axios from 'axios';
import Reply from "../Reply/Reply";
import LikeDislike from "../LikesDislikes/LikesDislikes";

    function Comment(props) {
        const [Comment, setComment] = useState("")
        const [allComments, setAllComments] = useState ([]);
          async function handleSubmit (event) {
              event.preventDefault();
              console.log(Comment, props.videoId)
            let newComment = await axios.post(`http://localhost:3006/api/comments/`, { 
                  "message": Comment,
                  "videoId": props.videoId
              })
              console.log(newComment);
              getComments();
            }
          async function getComments () {
            let response = await axios.get(`http://localhost:3006/api/comments/${props.videoId}`) ;
                console.log(response.data);
                setAllComments (response.data);
            }
        useEffect(() => {
            getComments();
        },[props.videoId])
       
        return (
            <div>
                <div>
                   <h5>{props.vidTitle}</h5>
                   <p>{props.vidDesc}</p>
                </div>
                <form onSubmit = {handleSubmit} >
                    <div>
                        <textarea className="w-100 mt-2" name = 'comment' id = 'comment' value = {Comment} onChange = {(event) => setComment(event.target.value)}></textarea>
                    </div>
                    <div>
                        <input type = 'submit' value = 'Add Comment'/>
                    </div>        
                </form>                
                <div className ="p-5">
                    <ul className="list-group">
                    {allComments.map((comment) => { 
                        return (
                            <li className="list-group-item mb-3 ml-0">
                                <h5>Posted {comment.dateAdded}</h5>
                                <p>{comment.message}</p>
                                <LikeDislike commentId = {comment._id} likes={comment.likes} dislikes={comment.dislikes} getComments = {getComments} />
                                <Reply commentId = {comment._id} replies = {comment.replies} getComments = {getComments}/>                                
                            </li>                
                        )}
                    )}
                    </ul>
                </div>    
            </div>
        )
    }    
 
export default Comment; 
