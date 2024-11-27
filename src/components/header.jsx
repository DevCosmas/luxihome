// import { Link } from 'react-router-dom';
// import { IoMdArrowDropdown } from 'react-icons/io';
// import { FaDirections } from 'react-icons/fa';
// import Logo from './logo';

// export default function Header() {
//   return (
//     <header className="w-full flex flex-col relative justify-center px-6 py-4">
//       <nav className="bg-white rounded-full py-2 sticky flex items-center justify-between px-4 gap-4 w-full">
//         <Logo />

//         <ul className="flex items-center gap-4  justify-center">
//           <li>
//             <Link>Home</Link>
//           </li>
//           <li>
//             <Link className="flex items-center justify-center gap-2">
//               <p>Listings</p>
//               <IoMdArrowDropdown className="rotate-180" />
//             </Link>
//           </li>
//           <li>
//             <Link>About</Link>
//           </li>
//           <li>
//             <Link className="flex items-center justify-center gap-2">
//               <p>Locations</p>
//               <IoMdArrowDropdown className="rotate-180" />
//             </Link>
//           </li>
//           <li>
//             <Link>Contact Us</Link>
//           </li>
//         </ul>

//         {/* map */}
//         <div className="flex cursor-pointer items-center font-bold gap-2 justify-center">
//           <span>Direction</span>
//           <FaDirections />
//         </div>
//       </nav>
//     </header>
//   );
// }

import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaDirections } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Logo from './logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 bg-white rounded-full">
        {/* Logo */}
        <Logo />

        {/* Hamburger Menu */}
        <button
          className="sm:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden sm:flex items-center gap-6">
          <NavItem
            label="Home"
            link="/"
          />
          <NavItem
            label="Listings"
            link="/listings"
            hasDropdown={true}
            dropdownItems={['Residential', 'Commercial', 'Land']}
          />
          <NavItem
            label="About"
            link="/about"
          />
          <NavItem
            label="Locations"
            link="/locations"
            hasDropdown={true}
            dropdownItems={['City A', 'City B', 'City C']}
          />
          <NavItem
            label="Contact Us"
            link="/contact"
          />
        </ul>

        {/* Map/Direction Button */}
        <div className="hidden sm:flex cursor-pointer items-center font-bold text-sm sm:text-base gap-2 hover:text-green-600 transition duration-300">
          <span>Direction</span>
          <FaDirections />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full py-4 px-6 shadow-md sm:hidden">
            <ul className="flex flex-col gap-4">
              <NavItem
                label="Home"
                link="/"
              />
              <NavItem
                label="Listings"
                link="/listings"
                hasDropdown={true}
                dropdownItems={['Residential', 'Commercial', 'Land']}
              />
              <NavItem
                label="About"
                link="/about"
              />
              <NavItem
                label="Locations"
                link="/locations"
                hasDropdown={true}
                dropdownItems={['City A', 'City B', 'City C']}
              />
              <NavItem
                label="Contact Us"
                link="/contact"
              />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ label, link, hasDropdown = false, dropdownItems = [] }) {
  return (
    <li className="relative group">
      <Link
        to={link}
        className="text-gray-800 font-medium text-sm sm:text-base flex items-center gap-2 hover:text-green-600 transition duration-300">
        {label} {hasDropdown && <IoMdArrowDropdown />}
      </Link>

      {/* Dropdown Menu */}
      {hasDropdown && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-40 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 group-hover:visible invisible transition-all duration-300">
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 transition duration-300">
              <Link
                to="/"
                className="text-gray-700 text-sm sm:text-base">
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  );
}