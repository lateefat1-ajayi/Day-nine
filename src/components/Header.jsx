import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-teal-400 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyCartList</h1>
        <nav>
          <Link to="/" className="hover:underline mr-4">Home</Link>
          <Link to="/list" className="hover:underline">Shopping List</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
