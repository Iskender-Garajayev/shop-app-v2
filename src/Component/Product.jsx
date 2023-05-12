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
        <div className='card' >
          <Link to={`/product/${product.id}`} className="card-img">
            <img src={product.image} alt="" />
          </Link>
          <div className="card-body">
            <p>{product.title}</p>
            <p>${product.price}</p>
            
          </div>
        </div>
    </div>
  )
}

export default Product
