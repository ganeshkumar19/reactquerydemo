import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const fetchPosts = ()=>{
  return axios.get("http://localhost:4000/posts")
}

const addPost = (post)=>{
  return axios.post("http://localhost:4000/posts", post)
}

const PostsRQ = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const queryclient = useQueryClient()

  const {data, isLoading, isError, error, isFetching, refetch} =useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  })


  const {mutate} = useMutation({
    mutationFn: addPost,
    onSuccess: (newData)=>{
      //queryclient.invalidateQueries("posts")
      queryclient.setQueryData(["posts"], oldQueryData=>{
        return{
          ...oldQueryData,
          data: [...oldQueryData.data, newData.data]
        }
      })
    }
  })

  console.log("isLoding",isLoading,"isfetching", isFetching)

  if(isLoading){
    return <h3>Posts is Loading</h3>
 }

  if(isError){
      return <h3>{error}</h3>
  }

  const handleSumbit = (e)=>{
    e.preventDefault()

    const post = {title, content}
    mutate(post)
    setTitle('')
    setContent('')
  }

return (
  <div className='post-list'>
      <form onSubmit={handleSumbit}>
        <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='enter title'/>
        <input type='text' value={content} onChange={(e)=> setContent(e.target.value)} placeholder='enter content'/>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={refetch}>fetch posts</button>
      {data?.data.map((post, index)=>(
          <Link to={`/queryposts/${post.id}`} key={post.id}>
          <div key={index} className='post-item'>
              <h3 className='post-title'>{post.title}</h3>
              <p className='post-body'>{post.content}</p>
          </div>
          </Link>
      ))}
  </div>
)
}

export default PostsRQ