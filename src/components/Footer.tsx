import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-8"> {/* Reduced padding to py-8 */}
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 text-sm"> {/* Adjusted text size to text-sm */}
          © {new Date().getFullYear()} Piramma Sakthi. All rights reserved.
        </p>
        <p className="mt-2 text-center text-gray-400 text-sm"> {/* Adjusted text size to text-sm */}
          Designing, developing, and delivering innovative solutions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
