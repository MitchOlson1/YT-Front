import React, { useState } from "react";
import axios from 'axios';




    

    function Comment(props) {
        const [Comment, setComment] = useState("")

          async function handleSubmit (event) {
              event.preventDefault();
              console.log(Comment, props.videoId)
            let newComment = await axios.post(`http://localhost:3006/api/comments/`, {
 
                  "message": Comment,
                  "videoId": props.videoId

              })
              console.log(newComment)
          }
    
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
    
            </div>
        )
    }
    
 
export default Comment; 

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