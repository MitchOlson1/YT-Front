import React, { useState, useEffect } from "react";
import axios from 'axios';


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
        },[setComment])
    
    
        return (
            <div>
                <form onSubmit = {handleSubmit} >

                    <div>
                        <textarea name = 'comment' id = 'comment' value = {Comment} onChange = {(event) => setComment(event.target.value)}>

                        </textarea>
                    </div>
                    <div>
                        <input type = 'submit' value = 'Add Comment'/>
                    </div>
        
                </form>
                
                <div className ="bg-info p5 border border-warning">
                    {allComments.map((comments) => { 
                        return (
                                <div>
                                    {comments.videoId}, {comments.message}, {comments.dateAdded} 
                                </div>
                           
                        )
                    }
                    )};
                </div>
    
            </div>
        )
    }
    
 
export default Comment; 

// {/* <thead>
// <tr>
//     <th>Comments</th>
// </tr>
// </thead>
// <button onClick={addComment}> Add Comment</button>
// </div>
// <div className="PostedComments">
// {Comment.map((comment, key) => {
//     return (
//     <div key={key} className="comment">
//         {comment.videoId}
// </div> */}
// const [comment, setComment] = useState('');
//     const [comments,setComments] = useState ([])
    
//     function handleSubmit (event) {
//         event.preventDefault();
//         let newEntry = {
//             body:comment
//         }
//         console.log(newEntry)
//         props.addNewComment(newEntry)

//     function addNewComment(comment){
//     let newComment = [...comments, comment];

//     setComments(newComment);
   

//     }
// }
//     return ( 
//         <form onSubmit={handleSubmit}>
//         <div class="row">    
//           <div class="col-25">    
//           </div>    
//           <div class="col-75">    
//           </div>    
//         </div>    
//         <div class="row">    
//           <div class="col-25">    
//             <label for="comment">Comment</label>    
//           </div>    
//           <div class="col-75">    
//             <input type="text" value={comment} onChange={(event) => setComment(event.target.value)} name="subject" placeholder="Write something.." />    
//           </div>    
//         </div>    
//         <div class="row">    
//           <input type="submit" value="Submit"/>    
//         </div>    
//       </form>    
//     );
// }