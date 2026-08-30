import { useQuery } from "@tanstack/react-query"
const QueryDemo = () => {
   const url="https://jsonplaceholder.typicode.com/posts?_limit=5"

   const getPosts=async()=>{
     const res=await fetch(url)
     return res.json()
   }
   const {data:posts,error}=useQuery({queryKey:["posts"],queryFn:getPosts})



   return (
     <div>
       <h2>Post List:</h2>
       {error&& <p>Trouble fetching:{error.message}</p>}
       {/* {posts.map((post)=>{
        return <li key={post.id}>{post.title}</li>
       })} */}
       <button onClick={()=>getPosts()}>Fetch</button>
     </div>
   )
 }
 
 export default QueryDemo
 