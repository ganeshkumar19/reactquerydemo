import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'


const fetchPostDetails = (postId)=>{
  return axios.get(`http://localhost:4000/posts/${postId}`)
}
const PostDetailsPage = () => {

  const {postId} = useParams()

  const {data, isError, isLoading, error}= useQuery(({
    queryKey: ["posts", postId],
    queryFn: ()=> fetchPostDetails(postId),
    staleTime: Infinity
  }))

  if(isError){
    return <h3>{error}</h3>
}

if(isLoading){
    return <h3>Some Error has Occured</h3>
}

const {title, content} = data?.data || []


  return (
    <div className='post-details-container'>
      <div className='post-details-title'>{title}</div>
      <div className='post-details-body'>{content}</div>
    </div>
  )
}

export default PostDetailsPage