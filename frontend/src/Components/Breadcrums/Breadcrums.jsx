import React from 'react'
import './Breadcrums.css'
import { Link } from 'react-router-dom';
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const {product} = props;
  return (
    <div className='breadcrums'>
     <Link to="/">HOME</Link> {/* Link to Home */} <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name} 
    </div>
  )
}

export default Breadcrums
