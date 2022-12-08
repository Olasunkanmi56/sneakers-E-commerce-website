import React, {useState, useContext} from 'react'
import {Link} from "react-router-dom"
import menu from "../assets/icon-menu.svg"
import logo from "../assets/logo.svg"
import carticon from "../assets/icon-cart.svg"
import close from "../assets/icon-close.svg"
import {CartContext} from "../CartContext"
import CartProduct from './CartProduct'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [CartIsOpen, setCartIsOpen] = useState(false)
    const cart = useContext(CartContext)

    
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    return (
        <div  className='relative flex items-center justify-between p-8 lg:border-b border-slate-400 max-w-7xl mx-auto'>
             <div className="flex items-center justify-start gap-4">
                <ul className="flex items-center justify-start gap-4">
                     {!isOpen && 
                       <li className="lg:hidden"><button onClick={() => setIsOpen(true)}><img src={menu} alt="logo" className="cursor-pointer" /></button></li> 
                     }
                     {isOpen && 
                      <li className="lg:hidden close"><button onClick={() => setIsOpen(false)}><img src={close} alt="logo" className="w-6 cursor-pointer" /></button></li>
                     }
                   <Link to={"/"}><li><img src={logo} alt="logo" /></li></Link> 
                </ul>
             <nav className={isOpen && "open"}>
                <ul>
                   <li className='font-bold text-lg cursor-pointer lg:font-normal lg:text-base'>Collections</li>
                   <Link to={"/product"}><li className='font-bold text-lg cursor-pointer lg:font-normal lg:text-base'>Men</li></Link>
                   <Link to={"/product"}><li className='font-bold text-lg cursor-pointer lg:font-normal lg:text-base'>Women</li></Link>
                   <li className='font-bold text-lg cursor-pointer lg:font-normal lg:text-base'>About</li>
                   <li className='font-bold text-lg cursor-pointer lg:font-normal lg:text-base'>Contact</li>
                </ul>
             </nav>
         </div>
             <div className="flex justify-start items-center">
               <button onClick={() => setCartIsOpen(!CartIsOpen)}><img  src={carticon} alt="cart" /></button>  
               <button>{productsCount}</button>
             </div> 

        {CartIsOpen &&
         <section className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-[600px] lg:left-auto lg:top-20"
        style={{
          zIndex: 1000,
        }}>
                <header>
                  <h1 className="border-b border-slate-400 font-bold pb-2 mb-8">Shopping Cart</h1>
                </header>
                <article>
                    {productsCount > 0 ? 
                    <>
                      <p>Items in your cart</p>
                      {cart.items.map((product, idx) => (
                           <CartProduct key={idx} id={product.id} quantity={product.quantity} />
                      ))}
                      .
                      <h1 className='font-bold text-slate-900'>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                      <button className='bg-blue-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-blue-600 transition-all duration-200'>
                          Purchase items!
                      </button>
                    </>
                    :
                    <h1>There is no item in your list</h1>
                    }
                </article>
            </section> }          
        </div>
    )
}

export default Navbar
