
import {useState,useEffect} from 'react'

const url="https://jsonplacehol...der.typicode.com/posts?_limit=5"


const QueryDemo = () => {

  const [posts,setPosts]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
const fetchData=async()=>{
      try{

        const res=await fetch(url)
        
        if(!res.ok){
          throw new Error("something went wrong")
        }
        const response=await res.json()
        setPosts(response)
      }catch(err){
        setError(err)
      }finally{
        setIsLoading(false)
      }
    }

    fetchData()
  },[])

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

