import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Herança Numismática</h3>
            <p className="text-amber-200">
              Preservando memórias e valores através de gerações.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <a href="mailto:contato@heranca-numismatica.com" className="flex items-center space-x-2 text-amber-200 hover:text-amber-300">
                <Mail size={18} />
                <span>contato@heranca-numismatica.com</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-amber-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-800 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Herança Numismática. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;