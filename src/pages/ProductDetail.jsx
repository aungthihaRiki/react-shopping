import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetail() {
    const {productId} = useParams();
    const currentProduct = products.find(product => product.id == productId);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail