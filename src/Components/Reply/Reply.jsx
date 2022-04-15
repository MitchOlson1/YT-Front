import React, { useState, useEffect } from "react";
import axios from 'axios';

const Reply = (props) => {
    const [reply, setReply] = useState();
    const [allReplies, setAllReplies] = useState([]);


    async function handleSubmit (event) {
        event.preventDefault();
        console.log(reply, props.videoId)
      let newReply = await axios.post(`http://localhost:3006/api/comments/`, {

            "message": reply,
            "videoId": props.videoId

        })
        console.log(newReply);
        getReply();

    }

    async function getReply () {
        let response = await axios.put(`http://localhost:3006/api/comments/${props.videoId}`) ;
            console.log(response.data);
            setAllReplies (response.data);
        }


        useEffect(() => {
            getReply();
        },[props.videoId])

    return ( 
        <div>
        <form onSubmit = {handleSubmit} >
            <div>
                <textarea name = 'reply' id = 'reply' value = {reply} onChange = {(event) => setReply(event.target.value)}></textarea>
            </div>
            <div>
                <input type = 'submit' value = 'Add reply'/>
            </div>        
        </form>                
        <div className ="p-5">
            <ul className="list-group">
            {allReplies.map((replies) => { 
                return (
                    <li className="list-group-item mb-3">
                        <h5>{replies.videoId} - posted {replies.dateAdded}</h5>
                        <p>{replies.message}</p>
                    </li>                           
                )}
            )}
            </ul>
        </div>

    </div>
     );
}
 
export default Reply;