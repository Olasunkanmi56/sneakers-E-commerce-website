import React from 'react'
import Banner from "../components/Banner"
import { productArray } from '../data/Products'
import ProductCard from './ProductCard'
import MarqiueCard from './MarqiueCard'

const Home = () => {
   
    return (
        <div className=''>
         <Banner />
         <div className="flex justify-center items-center mt-8">
         <h1 className='font-bold  text-3xl cursor-pointer lg:font-bolder'>FEATURED COLLECTIONS</h1>
         </div>
       <div className='products-container mb-9'>
          {productArray.map((product) => (
            <>
               <ProductCard product={product} />
             </>
          ))} 
      </div>

       <div className="maylike-products-wrapper">
          <h2 className='text-slate-900 font-bold text-2xl mb-2'>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {productArray.map((product) => (
                <MarqiueCard product={product} />
              ))}
            </div>
        </div>
        </div>
      </div>
    )
}

export default Home
