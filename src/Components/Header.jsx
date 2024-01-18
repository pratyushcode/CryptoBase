import React from 'react'
import { useState } from 'react';
import { CryptoState } from '../Context';


const Header = () => {
   
    const {currency,setCurrency,symbol}=CryptoState();

    const [isOpen, setIsOpen] = useState(false);
   

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }

    console.log()
  return (
    <div className='static w-full bg-black h-14 py-2 px-4 text-2xl rounded-lg shadow-slate-500 shadow-2xl flex justify-between z-10 '> 
    <h1 className='text-orange-500 font-require font-bold hover:text-orange-400 p-2'>CRYPTOBASE</h1>
    <div className="  text-left ">
      <div >
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-bg text-sm font-medium text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          
        >
          {currency}
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 z-20"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {/* Dropdown items */}
            <a
              href="#"
              className="block px-4 py-2 text-sm text-orange-700 hover:bg-bg "
              role="menuitem"
              onClick={()=>{setCurrency("USD"); setIsOpen(false)}}
            >
              USD
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-orange-700 hover:bg-bg"
              role="menuitem"
              onClick={()=>{setCurrency("INR"); setIsOpen(false)}}
            >
              INR
            </a>
           
          </div>
        </div>
      )}
    </div>

    </div>
  )
}

export default Header