import React from 'react'
import { Link } from 'react-router-dom'
// import {useParams} from 'react-router-dom'
// import products from '../products'
// import axios from 'axios'
// import { useState } from 'react'

const Product = ({product}) => {

  // const [product, setProduct] = useState([])
  

  // useEffect(()=>{
  //   const fetchProduct = async () =>{
  //     const {data} = await axios.get('https://fakestoreapi.com/products')
  //     setProduct(data)
  //   }
  //   fetchProduct()
  // }, [])

  return (
    <div>
      {/* {product.map((product)=> ( */}
        <Link to={`/product/${product.id}`} className='card' >
          <div className="card-img">
            <img src={product.image} alt="" />
          </div>
          <div className="card-body">
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        </Link>
    </div>
  )
}

export default Product
