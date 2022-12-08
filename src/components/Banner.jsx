import React from 'react'
import { BannerArray } from '../data/BannerData'
import BannerProduct from './BannerProduct'
const Banner = () => {
    return (
      <>
        {/* <div className="relative maylike-products-wrapper">
          <div className="marquee marquee-d">
            <div className="maylike-products-container track">
              {BannerArray.map((product) => (
                <>
                <BannerProduct key={product.id} product={product} />
                </>
              ))}
            </div>
          </div>
      </div> */}
      </>
    )
}

export default Banner
