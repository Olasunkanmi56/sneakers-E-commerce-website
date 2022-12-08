import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import { productArray } from '../data/Products'
import {CartContext} from "../CartContext"

const Products = () => {
  const cart = useContext(CartContext)
    return (
        <>
         <div className="flex justify-center items-center">
         <h1 className='font-bold  text-3xl cursor-pointer lg:font-bolder'>OUR PRODUCTS</h1>
         </div>
       <div className='products-container mb-9'>
          {productArray.map((item) => (
            <>
               <div className="product-card p-6 border rounded-lg  shadow-lg shadow-gray-500/50 flex flex-col justify-center items-center">
                 <Link to={`/product/${item.id}`}>
                 <img 
                   src={item.url}
                   className="product-image w-[250px] h-[240px]"
                 />
                 </Link>
                 <p className="product-name text-center">{item.title}</p>
                 <p className="product-price">${item.price}</p>
                 <button className='border  shadow-gray-500/50 py-2 px-4 mt-2 rounded-full bg-blue-800 text-white cursor-pointer' onClick={() => cart.addOneToCart(item.id)}>Buy Now</button>
               </div>
             </>
          ))} 
      </div>
      </>
    )
}

export default Products
