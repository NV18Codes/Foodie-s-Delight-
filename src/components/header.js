import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-orange-600 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Foodie's Delight</h1>
      <nav className="flex space-x-4">
        <Link className="text-white hover:text-gray-200" to="/">Home</Link>
        <Link className="text-white hover:text-gray-200" to="/menu">Menu</Link>
        <Link className="text-white hover:text-gray-200" to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
