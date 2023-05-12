import React, { useEffect, useState } from 'react'
// import products from '../products'
import Product from './Product'
import axios from 'axios'
import Header from './Header'

const HomeScreen = () => {

  const [products, setProduct] = useState([])
  

  useEffect(()=>{
    const fetchProduct = async () =>{
      const {data} = await axios.get('https://fakestoreapi.com/products')
      setProduct(data)
    }
    fetchProduct()
  }, [])

  return (
    <>
    <Header/>
    <div className='container'>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
    </>
  )
}

export default HomeScreen
