
import { useQuery } from '@tanstack/react-query'
import {useState,useEffect} from 'react'

const url="https://jsonplaceholder.typicode.com/posts?_limit=5"


const fetchData=async()=>{

        const res=await fetch(url)
        
        const response=await res.json()
        return response
    }


const QueryDemo = () => {

  
const {data,error,isLoading}=useQuery({queryKey:["posts"],queryFn:fetchData})
 
  
  return (
    <div>
{isLoading && <p>Loading...</p>}
{error && <p>Failed to fetch...</p>}
      <ul>
        {posts.map((post)=>{
          return <li key={post.id}>{post.title}</li>
        })}

      </ul>
      
    </div>
  )
}

export default QueryDemo

