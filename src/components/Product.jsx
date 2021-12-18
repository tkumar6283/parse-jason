import React from 'react';
import "../assets/css/Product.css"


export default function Product(props){
  const {data} = props;
  
  return (
    <div className='prd-container shadow'>
      <div className='prd-title'>{data.title}</div>
      <div className='prd-price'>{data.price}</div>
    </div>
  );
}