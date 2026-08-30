import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
const QueryDemo = () => {
  const url="https://jsonplaceholder.typicode.com/posts?_limit=5"

  

  const getPosts=async()=>{


    const res=await fetch(url)
    return res.json()
    
  }

  const {data:posts,error,isLoading}=useQuery({queryKey:["posts"],queryFn:getPosts})
  


   return (
     <div>
       <h2>Post List:</h2>
       {error && <p>Failed to fetch...</p>}
       {posts.map((post)=>{
        return <li key={post.id}>{post.title}</li>
       })}
       <button>Fetch</button>
     </div>
   )
 }
 
 export default QueryDemo
 
