import React from 'react';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
const CartPage = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div>
      <h1 className='text-center'>Cart Page</h1>
      <Cart />
    </div>
    </>
  );
};

export default CartPage;
