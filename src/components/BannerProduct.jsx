import React from 'react'

const BannerProduct = ({product}) => {
    return (
        <>
     <div>
        <div className="">
          <img 
            src={product.url}
            className=""
          /> 
        </div>
    </div>
       
        </>
    )
}

export default BannerProduct
