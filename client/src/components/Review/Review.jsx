import React from 'react'
import "./review.css"
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

const Review = () => {
  return (
    <div className='REVIEW'>
      <div className="review-top">
        <b>title</b>
        <div className="product-image">
        <img src='https://m.media-amazon.com/images/I/613WL0sLP1L.jpg' />
        <div className='controls'></div>
        </div>
      </div>
      <div className="review-bottom">
        <div className="stars-wrap">
        <b>username</b>
            <div className="allstars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            </div>
        </div>
        <div className='review-desc'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quam quod praesentium tempore quos aut atque, eligendi saepe recusandae mollitia, consequuntur quisquam eum iste ipsum excepturi. Optio odit libero tenetur similique. Provident magnam voluptas aut sapiente, deserunt aliquid libero.</p>
        <div className='likecounter'>
            <div className='likes'><span>5</span><AiOutlineLike className='thumb' /></div>
            <div className='dislikes'><span>0</span><AiOutlineDislike className='thumb' /></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Review
