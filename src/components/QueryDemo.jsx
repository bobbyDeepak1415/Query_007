import { useQuery } from "@tanstack/react-query"
const QueryDemo = () => {
   const url="https://jsonplaceholder.typicode.com/posts?_limit=5"

   const getPosts=async()=>{
     const res=await fetch(url)
     const posts=await res.json()
     return {posts}
   }
   const {data:posts,error}=useQuery({queryKey:["posts"],queryFn:getPosts})



   return (
     <div>
       <h2>Post List:</h2>
       {posts.map()}
       <button onClick={()=>getPosts()}>Fetch </button>
     </div>
   )
 }
 
 export default QueryDemo
 