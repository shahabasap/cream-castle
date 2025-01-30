
import { Outlet } from 'react-router-dom'
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://png.pngtree.com/png-vector/20240814/ourmid/pngtree-brown-coffee-logo-abstract-png-image_13390044.png" className="h-8" alt="cream-castle Logo" />
            <span className="self-center text-gray-800 text-2xl font-semibold whitespace-nowrap">Cream Castle</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div>
              <a href="https://www.instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-800 transition-colors">
                <CiInstagram size={24} />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-800 transition-colors">
                <FaFacebook size={24} />
              </a>
            </div>
            <div className="flex flex-col">
              <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors">
                (123) 456-7890
              </a>
              <a href="mailto:example@email.com" className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors">
                example@email.com
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <nav className="bg-amber-700 text-white">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a href="/" className="hover:text-amber-200 transition-colors" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-200 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/products" className="hover:text-amber-200 transition-colors">Products</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar