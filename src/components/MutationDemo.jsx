import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'

const createPost=async(newPost)=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify(newPost),
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    }
  })

  return res.json()

}



const MutationDemo = () => {

  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")

  const {mutate,data:newPost,isPending,isError,error}=useMutation({mutationFn:createPost})

  return (
    <div>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='post-title' />
      <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder='post-body'/>
        <button onClick={()=>mutate({title,body,postId:1})}>Add Post</button>

{isPending && <p>Creating a post...</p>}
{isError && <p>Something went wrong...:{error.message}</p>}


{newPost && (
  <div>
    <h4>{newPost.title}</h4>
    <p>{newPost.body}</p>
  </div>
)}

    </div>
  )
 
}

export default MutationDemo

