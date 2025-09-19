import React, { useState } from 'react'

const FilterCategoryItem = () => {

    const [activeFilter,setActiveFilter] = useState(false);

    return (
        <div 
        onClick={() => setActiveFilter((prev) => !prev)}
        className={`filterCategory--container ${activeFilter ? 'active' : ''}`}>
            <div className="filter--image">
                <img 
                    src="/assets/Images/Hero-Banner.jpg"
                    alt="image" />
            </div>
            <span>Lorem, ipsum dolor.</span>
        </div>
    )
}

export default FilterCategoryItem