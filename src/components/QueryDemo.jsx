import { useQuery } from "@tanstack/react-query"
import { useState } from "react"


const url="https://jsonplaceholder.typicode.com/posts?_limit=5"



 const fetchData=async()=>{

  const res=await fetch(url)
  
  
  const response=await res.json()

  return response

}



const QueryDemo = () => {
  
  const [isLoadData,setIsLoadData]=useState(false)

  const {data:posts,error,isLoading,refetch}=useQuery({queryKey:["posts"],queryFn:fetchData,enabled:isLoadData})
  ....
return (
      <div>
        <h2>Posts List</h2>
        {isLoading&&<p>Loading...</p>}
        {error && <p>Failed to fetch...</p>}
        <ul>
          {posts && posts.map((post)=>{
            return <li key={post.id}>{post.title}</li>
          })}
        </ul>
        <button onClick={()=>setIsLoadData(true)}>Fetch</button>
        <button onClick={()=>refetch()}>reFetch</button>
    </div>
  )
}

export default QueryDemo

