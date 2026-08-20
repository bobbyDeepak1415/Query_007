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

  return (
    <div>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} />
      <textarea value={body} onChange={(e)=>setBody(e.target.value)}/>
    </div>
  )
 
}

export default MutationDemo

