import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'

const Card = () => {
    return (
        <div className='card'>
            {/* <div className="newBadge">
                <span>new</span>
            </div> */}
            <div className="image">
                <img 
                    src="/assets/Images/Hero-Banner.jpg"
                    alt="product image" />
            </div>

            <div className="card--price">
                <div className="price">
                    <span>3 JOD</span>
                </div>
                <div className="rate">
                    <FaStar />
                    <span>4.5</span>
                </div>
            </div>

            <div className="card-title">
                <h4>Pork Chop with Apple Chutney</h4>
            </div>

            <div className="card--option">
                <div className="option">
                    <CiCircleCheck />
                    <span>4 pieces</span>
                </div>
                <div className="option">
                    <CiCircleCheck />
                    <span>Spicy Sauce</span>
                </div>
            </div>

            <div className="card--btn">
                <button>add to card</button>
            </div>
        </div>
    )
}

export default Card