import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className='navbar-container'>
    <p className='logo'>
      <Link href="/">Panita Online Store</Link>
    </p>
    <button type='button'
    className='cart-icon' onclick="">
      <AiOutlineShopping />
      <span className="cart-item-qty">1</span>
    </button>
    </div>
  )
}

export default NavBar