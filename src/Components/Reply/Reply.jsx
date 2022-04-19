import React, { useEffect } from "react";
import axios from 'axios';

const Reply = (props) => {


    async function handleSubmit (event) {
        event.preventDefault();
      let newReply = await axios.put(`http://localhost:3006/api/comments/${props.commentId}/replies`, {

            "message": event.target.reply.value

           
        })
        console.log(newReply);
        props.getComments();
       
    }

        useEffect(() => {
            handleSubmit();
        },[props.commentId])

    return ( 
        <div>
        <form onSubmit = {handleSubmit} >
            <div>
                <textarea name = 'reply' id = 'reply'></textarea>
            </div>
            <div>
                <input type = 'submit' value = 'Add reply'/>
            </div>        
        </form>                
        <div className ="p-5">
            <ul className="list-group">
            {props.replies.map((reply) => { 
                return (
                    <li className="list-group-item mb-3">
                        <p>{reply.message}</p>
                    </li>                           
                )}
            )}
            </ul>
        </div>

    </div>
     );
}
 
export default Reply;