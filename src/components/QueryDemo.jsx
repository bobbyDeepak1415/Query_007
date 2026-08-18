import { useEffect, useState } from "react"


const url="https://jsonplaceholder.typicode.com/posts?_limit=5"




const QueryDemo = () => {

  const [posts,setPosts]=useState([])
  const [error,setError]=useState(null)
  const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{

    const fetchData=async()=>{
try{

  const res=await fetch(url)
  const response=await res.json()
  setPosts(response)
     }catch(err){
      setError(err)
     }finally{
      setIsLoading(true)
     }
}

fetchData()

  },[])

  
 
  

  return (
      <div>
        <h2>Posts List</h2>
        {isLoading&&<p>Loading...</p>}
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

