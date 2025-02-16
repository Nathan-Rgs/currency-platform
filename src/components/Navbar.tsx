import React from 'react';
import { Link } from 'react-router-dom';
import { Coins } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-amber-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-amber-300" />
            <span className="font-serif text-xl font-bold">Herança Numismática</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <Link to="/coins" className="hover:text-amber-300 transition-colors">Moedas</Link>
            <Link to="/add-coin" className="hover:text-amber-300 transition-colors">Adicionar Moeda</Link>
            <Link to="/contact" className="hover:text-amber-300 transition-colors">Contato</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;