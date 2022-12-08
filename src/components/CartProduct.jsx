import {CartContext} from "../CartContext"
import React, {useContext} from 'react'
import { getProductData } from '../data/Products'


const CartProduct = (props) => {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)
  return (
       <>
       <div className="flex justify-start items-center gap-2">
        <img className="w-[100px]" src={productData.url}   alt={productData.title}/>
         <h3 className="text-slate-600 text-sm">{productData.title}</h3>
       </div>
         <div className="flex justify-between items-center gap-2">
         <p  className="text-slate-600 text-2xl">{quantity} total</p>
         <p className="font-bold text-slate-900">${(quantity * productData.price).toFixed(2)}</p>
         </div>
         <div className="flex justify-center items-center ">
         <button className="bg-red-500 mt-2 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-1/2 hover:bg-red-600 transition-all duration-200" onClick={() => cart.deleteFromCart(id)}>Remove</button>
         </div>
         <hr className="mt-3"></hr>
       </>
  )
}

export default CartProduct