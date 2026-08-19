import React, { useState } from 'react'

const MutationDemo = () => {

    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")

  return (
    <div className='section'>
        <h2>Mutations</h2>

<input value={title} placeholder='Post title' onChange={(e)=>setTitle(e.target.value)}/>

    </div>
  )
}

export default MutationDemo

