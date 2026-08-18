import { useEffect, useState } from "react"


const url="https://jsonplaceholder.typicode.com/posts?_limit=5"




const QueryDemo = () => {

  const [posts,setPosts]=useState([])
  const [error,setError]=useState(null)
  const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{

    const fetchData=async()=>{

 const res=await fetch(url)
 const response=await res.json()
 setPosts(response)
    }

fetchData()

  },[])

  
 
  

  return (
      <div>
        Hello
    </div>
  )
}

export default QueryDemo

