import {Routes, Route} from "react-router-dom"
import {Navbar,Home , Products, ProductDetails, Footer} from "./components/index"
import CartProvider from "./CartContext"

function App() {  
  return (
      <CartProvider>
              <Navbar />
              <Routes>
                  <Route  path="/" element={<Home  />}/>
                  <Route exact path="/product" element={<Products />} />
                  <Route exact path="/product/:id" element={<ProductDetails />} />
              </Routes>
              <Footer />
       </CartProvider>
  );
}

export default App;
