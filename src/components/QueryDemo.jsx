
import { useQuery } from '@tanstack/react-query'
import {useState,useEffect} from 'react'

const url="https://jsonplaceholder.typicode.com/posts?_limit=5"



const fetchData=async()=>{

        const res=await fetch(url)
        
        const response=await res.json()
        return response
    }


const QueryDemo = () => {

  const [isLoadData,setIsLoadData]=useState(false)

  
const {data:posts,error,isLoading}=useQuery({queryKey:["posts"],queryFn:fetchData,enabled:isLoadData})
 
  
  return (
    <div>
{isLoading && <p>Loading...</p>}
{error && <p>Failed to fetch...</p>}
      <ul>
        {posts && posts.map((post)=>{
          return <li key={post.id}>{post.title}</li>
        })}

      </ul>

      <button onClick={()=>setIsLoadData(true)}>Get Data</button>
      
    </div>
  )
}

export default QueryDemo

