import React from 'react'

const HeadLines = ({title,subtitle}) => {
    return (
        <div className='headlines'>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}

export default HeadLines