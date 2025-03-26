import { useState } from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(false);
  const [name, setName] = useState("Go to Cart / Items in Cart 🛒 :");
 

  const cartVisibility = () => {
    setCart(prevState => !prevState);
  }

  const changeName = () => {
    if (name === "Go to Cart / Items in Cart 🛒 :") {
      setName("Back to Home");
    } else {
      setName("Go to Cart / Items in Cart 🛒 :")
    }
  }

  const changeShopName = () => {
      setName("Go to Cart / Items in Cart 🛒 :")
    }

  

  return (
    <>
      <Navbar cartVisibility={cartVisibility} cartItems={cartItems} buttonName={changeName} name={name} cart={cart}/>
      <Products cartVisibility={cartVisibility} cartItems={cartItems} setCartItems={setCartItems} cart={cart} changeShopName={changeName}/>
      <Footer />

    </>
  )
}

export default App
