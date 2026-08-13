import  { useState,useEffect } from 'react'

const url="https://jsonplaceholder.typicode.com/posts?_limit=5"


const fetchPosts=async()=>{

                const response=await fetch(url)

                return response.json()
        }

const QueryDemo = () => {

const {data:posts,isLoading,error}=useQuery({queryKey:["posts"],queryFn:fetchPsots})
   
   
  return (
    <div>
        <h2>Intro and setUp</h2>
        {isLoading && <p>Loading</p>}
        {error && <p>Something went wrong...</p>}
        <ul>
            {posts && posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
      
    </div>
  )
}

export default QueryDemo
