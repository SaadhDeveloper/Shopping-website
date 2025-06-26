import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignUp from "./Pages/LoginSignUp"
import Footer from "./Components/Footer/Footer"
import men_banner from "./Components/Assests/banner_mens.png"
import women_banner from "./Components/Assests/banner_women.png"
import kid_banner from "./Components/Assests/banner_kids.png"

function App() {

  return (
    <>
      <div>
        <Router>
          {/* Navbar Section */}
          <Navbar />

          {/* Main Page */}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path="/product" element={<Product />}>
            {/* this is Nested Route for Product page */}
              <Route path=":productId" element={<Product />} /> 
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </Router>

      </div>
    </>
  )
}

export default App
