import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const Header: React.FC = () => {
  const cartItems = useCartStore((state) => state.cart);
  const itemCount = cartItems.reduce((count: number, item: { quantity: number }) => {
    return count + item.quantity;
  }, 0);
  
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/cart" className="mr-4">Cart ({itemCount})</Link>
        <Link to="/checkout">checkout</Link>
      </nav>
    </header>
  );
};

export default Header;