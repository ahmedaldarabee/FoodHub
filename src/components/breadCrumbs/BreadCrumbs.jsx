import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({page}) => {
    return (
        <section className='breadCrumbs'>
            <div className="breadCrumbs--text">
                <Link to={"/"}>Home - </Link>
                <span>{page}</span>
            </div>
        </section>
    )
}

export default BreadCrumbs