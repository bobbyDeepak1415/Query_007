import {useQuery} from '@tanstack/react-query'

const url="https://jsonplaceholder.typicode.com/posts?_limit=5"


const fetchPosts=async()=>{

                const response=await fetch(url)
               
                return await response.json()
          
        }

const QueryDemo = () => {


    const {data:posts,isLoading,error}=useQuery({queryKey:["posts"],queryFn:fetchPosts})
    
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
