import React, {useContext}  from 'react'
import {Link} from "react-router-dom"
import {CartContext} from "../CartContext"

const ProductCard = ({product}) => {
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)
  console.log(cart.items)


  const handleSubmit = (e) => {
      e.preventDefault()
  }


    return (
        <>
           <div className="product-card p-6 border rounded-lg  shadow-lg shadow-gray-500/50 flex flex-col justify-center items-center">
                 <Link to={`/product/${product.id}`}>
                 <img 
                   src={product.url}
                   className="product-image w-[250px] h-[240px]"
                 />
                 </Link>
                 <p className="product-name text-center font-bold">{product.gender}</p>
                 <p className="product-name text-center">{product.title}</p>
                 <p className="product-price">${product.price}</p>
                 {productQuantity > 0 ? 
                    <>
                    <form onSubmit={handleSubmit} className="my-4">
                        <div className='flex justify-start gap-10'>
                        <button  onClick={() => cart.removeOneFromCart(product.id)} className="flex items-center justify-center gap-4 md:mt-0 bg-blue-500 py-2 px-4 text-white font-bold rounded-lg shadow 
                  mt-5 hover:bg-blue-600 translate-all duration-200">-</button>
                  <label className='font-bold'>In Cart: {productQuantity}</label>
                  <button  onClick={() => cart.addOneToCart(product.id)} className="flex items-center justify-center gap-4 md:mt-0 bg-blue-500 py-2 px-4 text-white font-bold rounded-lg shadow 
                  mt-5 hover:bg-blue-600  translate-all duration-200">+</button>
                        </div>
                    </form>
                    <button  onClick={() => cart.deleteFromCart(product.id)} className="flex items-center justify-center gap-4 md:mt-0 bg-red-500 py-2 px-4 text-white font-bold rounded-lg shadow 
                  mt-5 hover:bg-red-600 w-1/2 translate-all duration-200 my-4">Remove all</button>
                    </> :
                  <button className='flex items-center justify-center gap-4 md:mt-0 bg-blue-500 py-2 px-4 text-white font-bold rounded-lg shadow 
                  mt-5 hover:bg-blue-600 w-full translate-all duration-200' onClick={() => cart.addOneToCart(product.id)}>Add to cart</button>
                 }
            </div>
        </>
    )
}

export default ProductCard
