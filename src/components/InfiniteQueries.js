import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios';
import React, { useEffect } from 'react'
import {useInView} from 'react-intersection-observer'


const fetchFruits = ({pageParam}) => {
    return axios.get(`http://localhost:4000/fruits/?_limit=10&_page=${pageParam}`);
  };

const InfiniteQueries = () => {

    const {ref, inView} = useInView()


    const {data, isLoading, isError, error, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ["fruits"],
        queryFn: fetchFruits,
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages)=>{
            if(allPages.length < 5){
                return allPages.length + 1
            }else{
                return undefined
            }
        }
    })

    useEffect(()=>{
        if(inView){
            fetchNextPage()
        }
      }, [fetchNextPage, inView])

    if (isLoading) {
        return <h3>Posts are Loading...</h3>;
      }
    
      if (isError) {
        return <h3>{error.message}</h3>;
      }







  return (
    <div className='container'>
        {data?.pages.map((page)=>{
            return page?.data.map((fruit)=>{
               return <div className='fruit-item' key={fruit.id}>{fruit.name}</div>
            })
        })}
        <div ref={ref}>{isFetchingNextPage && 'Loading'}</div>
    </div>
  )
}

export default InfiniteQueries