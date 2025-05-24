import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostsConditional = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(false)

    const fetchPosts = async()=>{
        try{
            const response = await axios.get('http://localhost:4000/posts')
            setPosts(response.data)
            console.log(response)
        }catch(error){
            setError(true)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchPosts()
    }, [])
       
    if(loading){
        return <h3>Posts is Loading</h3>
    }

    if(error){
        return <h3>Some Error has Occured</h3>
    }


  return (
    <div className='post-list'>
        {posts.map((post, index)=>(
            <div key={index} className='post-item'>
                <h3 className='post-title'>{post.title}</h3>
                <p className='post-body'>{post.content}</p>
            </div>
        ))}
    </div>
  )
}

export default PostsConditional