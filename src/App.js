import './App.css'
import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PostsConditional from './components/PostsConditional'
import PostsRQ from './components/PostsRQ'
import PostDetailsPage from './components/PostDetailsPage'
import PaginatedFruits from './components/PaginatedFruits'
import InfiniteQueries from './components/InfiniteQueries'
import LoginComponent from './LoginComponent'

const App = () => {
  return (
    <LoginComponent/>
   /*<BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/traditionalposts'>Traditional Posts</Link></li>
            <li><Link to='/queryposts'>RQ Posts</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/traditionalposts' element={<PostsConditional/>}/>
          <Route exact path='/queryposts' element={<PostsRQ/>}/>
          <Route exact path='/queryposts/:postId' element={<PostDetailsPage/>}/>
          <Route exact path='/pag-fruits' element={<PaginatedFruits/>}/>
          <Route exact path='/infi-fruits' element={<InfiniteQueries/>}/>
        </Routes>
      </div>
   </BrowserRouter>*/
  )
}

export default App