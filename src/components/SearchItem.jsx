import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import { useState } from 'react';
import Product from './Product';


const SearchItem = ({cart, setCart}) => {
  
const {term } = useParams();     
const [filterData, setFilterData] = useState([]);

useEffect(() => {
  const filteredData = () =>{
  const data = items.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase()));
    // console.log(data)
    setFilterData(data)

}

filteredData();

}, [term])


return (
  <Product cart={cart} setCart={setCart} items={filterData} />
)
}

export default SearchItem
