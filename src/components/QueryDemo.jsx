
import { useQuery } from '@tanstack/react-query'
import {useState,useEffect} from 'react'

const url="https://jsonplaceholder.typicode.com/posts?_limit=5"

// Tanstack query is an asyncronous state management library that enables client side . it helps aus to fetch store and update data from apis without having to manually manage all of the loading and error and caching and refething logic


const fetchData=async()=>{

        const res=await fetch(url)
        
        const response=await res.json()
        return response
    }


const QueryDemo = () => {

  
const {data:posts,error,isLoading}=useQuery({queryKey:["posts"],queryFn:fetchData})
 
  
  return (
    <div>
{isLoading && <p>Loading...</p>}
{error && <p>Failed to fetch...</p>}
      <ul>
        {posts && posts.map((post)=>{
          return <li key={post.id}>{post.title}</li>
        })}

      </ul>
      
    </div>
  )
}

export default QueryDemo

