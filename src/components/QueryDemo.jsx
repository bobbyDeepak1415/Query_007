import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
const QueryDemo = () => {
  const url="https://jsonplaceholder.typicode.com/posts?_limit=5"

  

  const getPosts=async()=>{


    const res=await fetch(url)
    return res.json()
    
  }

  const [fetched,setFetch]=useState(false)

  const {data:posts,error,isLoading,refetch}=useQuery({queryKey:["posts"],queryFn:getPosts,enabled:fetched})
  


   return (
     <div>
       <h2>Post List:</h2>
       {error && <p>Failed to fetch...</p>}
       {isLoading && <p>Data Loading...</p>}
       {posts?.map((post)=>{
        return <li key={post.id}>{post.title}</li>
       })}
       <button onClick={()=>setFetch(true)}>Fetch</button>
       <button onClick={()=>refetch()}>reFetch</button>
     </div>
   )
 }
 
 export default QueryDemo
 
