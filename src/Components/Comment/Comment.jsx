import React, { useState, useEffect } from "react";
import axios from 'axios';
import { format } from 'date-fns';


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
                <form onSubmit = {handleSubmit} >
                    <div>
                        <textarea name = 'comment' id = 'comment' value = {Comment} onChange = {(event) => setComment(event.target.value)}></textarea>
                    </div>
                    <div>
                        <input type = 'submit' value = 'Add Comment'/>
                    </div>        
                </form>                
                <div className ="p-5">
                    <ul className="list-group">
                    {allComments.map((comments) => { 
                        return (
                            <li className="list-group-item mb-3">
                                <h5>{comments.videoId} - posted {comments.dateAdded}</h5>
                                <p>{comments.message}</p>
                            </li>                           
                        )}
                    )}
                    </ul>
                </div>
    
            </div>
        )
    }
    
 
export default Comment; 

