import React from 'react'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import HeadLines from '../../components/headlines/HeadLines'
import FilterCategoryItem from '../../components/filterCategoryItem/FilterCategoryItem'
import Card from '../../components/card/Card'

const Shop = () => {
  return (
    <main className='shop'>
      <BreadCrumbs page={"Shop"}/>
      <HeadLines title={"Shop by category section"} subtitle={"Shop by category"}/>
      
      <div className="filter-category">
        <FilterCategoryItem />
        <FilterCategoryItem />
        <FilterCategoryItem />
        <FilterCategoryItem />
        <FilterCategoryItem />
      </div>

      <div className="card--items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default Shop