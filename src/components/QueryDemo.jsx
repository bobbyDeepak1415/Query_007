import  { useState,useEffect } from 'react'

const QueryDemo = () => {

    const url="https://jsonplaceholder.typicode.com/posts?_limit=5"

    const [posts,setPosts]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState("")

    useEffect(()=>{

        const fetchPosts=async()=>{
            try{

                const response=await fetch(url)
                if(!response.ok){
                    throw new Error("Failed To fetch")
                }
                const res=await response.json()
                setPosts(res)
            }catch(err){
                setError(err)
            }finally{
                setIsLoading(false)
            }
        }
        fetchPosts()

    },[])

  return (
    <div>
        <h2>Intro and setUp</h2>
        {isLoading && <p>Loading</p>}
        {error && <p>Something went wrong...</p>}
        <ul>
            {posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
      
    </div>
  )
}

export default QueryDemo
