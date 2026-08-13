import  { useState,useEffect } from 'react'

const QueryDemo = () => {

    const url="https://jsonplaceholder.typicode.com/posts?_limit=5"

    const [posts,setPosts]=useState([])

    useEffect(()=>{

        const fetchPosts=async()=>{
            const response=await fetch(url)
            const res=await response.json()
            setPosts(res)
        }
        fetchPosts()

    },[url])

  return (
    <div>
        <h2>Intro and setUp</h2>
        <ul>
            {posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
      
    </div>
  )
}

export default QueryDemo
