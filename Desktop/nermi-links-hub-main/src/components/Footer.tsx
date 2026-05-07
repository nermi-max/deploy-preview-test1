
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 bg-black/40 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-nermi-light/70 text-sm">
            © {currentYear} studionermi. All rights reserved.
          </p>
          <div className="mt-2 sm:mt-0">
            <span className="text-nermi-light/50 text-xs">
              Made with 💜 by Nermi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
