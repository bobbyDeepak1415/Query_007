
import {useState} from 'react'

const url="https://jsonplaceholder.typicode.com/posts?_limit=5"

import React from 'react'

const QueryDemo = () => {

  const [posts,setPosts]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await fetch(url)
const resposne=await res.json()
setPosts(response)
    }

    fetchData()
  })

  return (
    <div>

      <ul>
        {posts.map((post)=>{
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
      
    </div>
  )
}

export default QueryDemo

