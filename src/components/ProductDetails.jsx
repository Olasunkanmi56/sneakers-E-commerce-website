import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import { productArray } from '../data/Products'
import {CartContext} from "../CartContext"
import { FaShoppingCart} from "react-icons/fa"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import ProductCard from './ProductCard'
const ProductDetails = () => {
    const{ id }= useParams()
    const product = productArray.find(item => item.id === id)
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    return (
        <div>
           {product && 
            <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-20 place-items-center">
                <img src={product.url} alt="sneakers" className="w-full lg:w-[400px] lg:rounded-2xl cursor-pointer" />
                <article className="px-8 pb-10">
             <h2 className="bg-slate-100 py-1 px-2 text-blue-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">Sneaker Company</h2>
              <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl" >{product.title}</h1>
              <p>{product.title}</p>

            <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5 mt-2">
                <li className="text-slate-900 font-bold text-2xl">${product.price}</li>
                <li className="bg-slate-100 py-1 px-2 text-blue-400 tracking-wide text-sm font-bold inline-block rounded shadow">50% off</li>
            </ul>

            <p className="text-slate-600 text-sm"><s>$250.00</s></p>
            </div>

            <div className="mt-10 lg:flex item-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
                <li  className="cursor-pointer">
                <button onClick={() => cart.removeOneFromCart(product.id)}> <AiOutlineMinus /></button>
                </li>
                <li>{productQuantity}</li>
                <li  className="cursor-pointer">
                    <button onClick={() => cart.addOneToCart(product.id)}> <AiOutlinePlus /></button>
                </li>
            </ul>
            <div className="lg:flex-1">
            <button onClick={() => cart.addOneToCart(product.id)}   className="flex items-center justify-center gap-4 md:mt-0 bg-blue-500 py-2 px-4 text-white font-bold rounded-lg shadow 
            mt-5 hover:bg-blue-600 w-full translate-all duration-200">
                <FaShoppingCart className="text-2xl text-slate-600" /> Add to cart
            </button>
            </div>
            </div>
         </article>
            </section>
           }  
           {/* <div className="maylike-products-wrapper">
          <h2 className='text-slate-900 font-bold text-2xl mb-2'>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {productArray.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </div>
      </div> */}
        </div>
    )
}

export default ProductDetails
