import { useState, useEffect } from 'react'
import axios from 'axios'

function Products({ cartVisibility, setCartItems, cartItems, cart, changeName }) {
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    cartVisibility();
    changeName();
  }


  const addCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      alert("Item is already added to the cart")
    } else {
      setCartItems(prevCart => [...prevCart, product]);
    }

  }

  const removeCart = (product) => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== product.id));

  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products...", error)
      }

    }
    fetchProducts();
  }, []);


  return (
    <div className='relative'>

      <div className='absolute z-20'>
        {cart === true ? (
          <div>
            <button className='bg-orange-300 rounded-md pt-1 ml-1 md:ml-8 pl-2 mt-2 pb-1 font-semibold mb-2 text-purple-800 text-md pr-2 md:mt-2 md:mb-1 md:pr-5 md:text-2xl'>Items in Cart 🛒 : {cartItems.length}</button>
          </div>
        ) : <p></p>}

        {cart === true ? (
          <div className='overflow-auto bg-cyan-50 lg:ml-40 h-96 md:ml-25 mt-1 md:w-4/5 border-3 m-5 rounded-lg border-dashed border-green-500'>
            <h1 className='text-xl text-center bg-gray-200 py-2 font-semibold text-blue-500 mb-4 md:mt-1 md:m-5 md:text-3xl md:font-bold'>Cart Items</h1>
            {cartItems.length > 0 ? (
              <ul className='ml-2 mr-2 md:flex md:flex-wrap lg:ml-10 lg:grid  lg:grid-cols-4 lg:grid-rows-5'>
                {cartItems.map(product => (
                  <li key={product.id}>
                    <h2 className='mb-2 text-lg font-semibold text-cyan-600 md:font-bold md:w-2/6 lg:w-5/6'>{product.title}</h2>
                    <p className='mb-2 text-lg font-semibold text-green-500 md:font-bold'>Category : {product.category}</p>
                    <img className='mb-2 lg:w-2/6 md:w-4/5 md:ml-25 lg:ml-2 transform hover:scale-110 transition duration-300' src={product.image} alt={product.title} />
                    <p className='mb-3 mt-3 font-bold text-center text-xl text-red-500 md:font-extrabold lg:w-2/6'>Price : ${product.price}</p>
                    <button className='text-xl font-semibold w-2/3 ml-15 mb-5 rounded-lg hover:bg-red-800 text-center py-2 bg-red-500 md:font-extrabold md:w-4/5 lg:w-4/5 md:ml-25 lg:ml-2 lg:flex-row hover:cursor-pointer' onClick={() => removeCart(product)}>Remove from Cart</button>
                    <hr className='mb-4 text-gray-600 outline-dotted lg:hidden' />
                  </li>
                ))}
              </ul>
            ) : (<p className='md:text-2xl mb-2 md:ml-10 md:font-bold text-pink-600 text-lg ml-5 font-bold'>Cart is Empty.</p>)}
          </div>
        ) : <p></p>}
      </div>


      <div className='absolute inset-0 z-10 backdrop-blur-sm'>
        <h1 className='text-xl text-center bg-gray-200 py-2 font-semibold text-blue-500 mb-4 md:mt-1 md:m-5 md:text-3xl md:font-bold'>Products</h1>
        <ul className='ml-2 mr-2 md:flex md:flex-wrap lg:ml-10 lg:grid  lg:grid-cols-4 lg:grid-rows-5'>
          {products.map(product => (
            <li key={product.id}>
              <h2 className='mb-2 text-lg font-semibold text-cyan-600 md:font-bold md:w-2/6 lg:w-5/6'>{product.title}</h2>
              <p className='mb-2 text-lg font-semibold text-green-500 md:font-bold'>Category : {product.category}</p>
              <img className='mb-2 lg:w-2/6 md:w-4/5 md:ml-25 lg:ml-2 transform hover:scale-110 transition duration-300' src={product.image} alt={product.title} />
              <p className='mb-3 mt-3 font-bold text-center text-xl text-red-500 md:font-extrabold lg:w-2/6'>Price : ${product.price}</p>
              <button className='text-xl font-semibold w-2/3 ml-15 mb-5 rounded-lg hover:bg-yellow-500 text-center py-2 bg-yellow-300 md:font-extrabold md:w-4/5 md:ml-25 lg:w-3/6 lg:ml-2 lg:flex-row hover:cursor-pointer' onClick={() => addCart(product)}>Add to Cart</button>
              <hr className='mb-4 text-gray-600 outline-dotted lg:hidden' />
            </li>
          ))}
        </ul>
      </div>

    </div>
  )


  // return (
  //   <div>
  //     <button className='bg-orange-300 rounded-md pt-1 ml-1 md:ml-8 pl-2 mt-2 pb-1 font-semibold mb-2 text-purple-800 text-md pr-2 md:mt-2 md:mb-1 md:pr-5 md:text-2xl'>Items in Cart 🛒 : {cartItems.length}</button>
  //     <h1 className='text-xl text-center bg-gray-200 py-2 font-semibold text-blue-500 mb-4 md:mt-1 md:m-5 md:text-3xl md:font-bold'>Cart Items</h1>
  //     {cartItems.length > 0 ? (
  //       <ul className='ml-2 mr-2 md:flex md:flex-wrap lg:ml-10 lg:grid  lg:grid-cols-4 lg:grid-rows-5'>
  //         {cartItems.map(product => (
  //           <li key={product.id}>
  //             <h2 className='mb-2 text-lg font-semibold text-cyan-600 md:font-bold md:w-2/6 lg:w-5/6'>{product.title}</h2>
  //             <p className='mb-2 text-lg font-semibold text-green-500 md:font-bold'>Category : {product.category}</p>
  //             <img className='mb-2 lg:w-2/6 md:w-4/5 md:ml-25 lg:ml-2 transform hover:scale-110 transition duration-300' src={product.image} alt={product.title} />
  //             <p className='mb-3 mt-3 font-bold text-center text-xl text-red-500 md:font-extrabold lg:w-2/6'>Price : ${product.price}</p>
  //             <button className='text-xl font-semibold w-2/3 ml-15 mb-5 rounded-lg hover:bg-red-800 text-center py-2 bg-red-500 md:font-extrabold md:w-4/5 lg:w-4/5 md:ml-25 lg:ml-2 lg:flex-row' onClick={() => removeCart(product)}>Remove from Cart</button>
  //             <hr className='mb-4 text-gray-600 outline-dotted lg:hidden' />
  //           </li>
  //         ))}
  //       </ul>
  //     ) : (<p className='md:text-2xl md:ml-10 md:font-bold text-pink-600 text-lg ml-5 font-bold'>Cart is Empty. <span><button className='hover:cursor-pointer text-green-500 underline' onClick={handleClick}>Click here to Shop Now</button></span></p>)}
  //   </div>
  // )

}

export default Products