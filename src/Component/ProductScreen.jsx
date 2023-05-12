import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = ({match}) => {

  const [product, setProduct] = useState({})
  const {id} = useParams()
  
  
  useEffect(() => {
    const fethcProduct = async () => {
      const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(data) 
    }
    fethcProduct()
  },[id])


  return (
    <>
      <div className="product-screen-container">
        <div className="product-screen-image">
          <img src={product.image} alt="" />

        </div>
        <div className="product-screen-title">
          <p>{product.title}</p>
          
        </div>
      </div>      
    </>
  )
}

export default ProductScreen
