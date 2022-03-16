import React from 'react'
import './Post.css'
import './PostList.css'
import { PostItems } from './PostItems'

function PostList() {
  return (
    <div className='postList'>
        {PostItems.map((item) =>{
            return(
                <div className='post'>
                    <h1 className='title'>{item.title}</h1>
                    <h3 className='albumReview'>{item.text}</h3>
                    <img className='albumImg' src={item.url}/>
                </div>
            )
        })}
    </div>
  )
}

export default PostList