import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import { RxCross1 } from "react-icons/rx";
import MainContext, { contextApi } from '../compoents/MainContext';


export default function Header() {

  let {
    cart,
    Setcart,
    
  }=useContext(contextApi)

  console.log(cart.length)



  let [menu,Setmenu]=useState(0);
  let [type,Settype]=useState(0);

  return (
    
    <>
    {/* <div className="flex py-4">
      <input type={type ? "password" : "text"} name='password' className='border-2' />
      <button className='bg-[orange] p-2' onClick={()=>Settype(!type)}>{type ? "show" : "hide"}</button>


    </div> */}

   <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between mx-auto py-4 max-w-[1320px]">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white card">
        KhadriBazzar
      </span>
    </Link>

    <button
      onClick={() => Setmenu(true)}
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <div
      className={`block md:hidden w-full h-screen md:h-auto z-1 fixed md:static top-0 md:top-auto duration-100 ${
        menu ? "left-0" : "left-[-100%]"
      } md:bg-transparent bg-white mobile`}
      id="navbar-default1"
    >
      <div className="flex justify-between px-10 py-4">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 md:hidden block"
          alt="Flowbite Logo"
        />
        <RxCross1 className="text-[24px]" onClick={() => Setmenu(false)} />
      </div>

      <ul className="font-medium flex text-white flex-col md:flex-none p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
        <li>
          <Link to="/cart" className="block py-2 px-3 text-black rounded-sm">
            Cart({cart.length})
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-black"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="block py-2 px-3 text-gray-900 rounded-sm"
          >
            About us
          </Link>
        </li>
        <li>
          <Link to="/login" className="block py-2 px-3 text-black">
            Login
          </Link>
        </li>
        <li>
          <Link to="/products" className="block py-2 px-3 text-black">
            Product
          </Link>
        </li>
        <li>
          <Link to="/Register" className="block py-2 px-3 text-black">
            Register
          </Link>
        </li>
      </ul>
    </div>

    <div
      className="hidden md:flex md:h-auto desktop"
      id="navbar-default1"
    >
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 md:hidden block"
        alt="Flowbite Logo"
      />

      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white md:bg-transparent">
        <li>
          <Link to="/cart" className="block py-2 px-3 rounded-sm text-white">
            Cart({cart.length})
          </Link>
        </li>
        <li>
          <Link to="/" className="block py-2 px-3 rounded-sm text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="block py-2 px-3 text-white rounded-sm">
            About us
          </Link>
        </li>
        <li>
          <Link to="/products" className="block py-2 px-3 text-white">
            Product
          </Link>
        </li>
        <li>
          <Link to="/login" className="block py-2 px-3 text-white">
            Login
          </Link>
        </li>
        <li>
          <Link to="/Register" className="block py-2 px-3 text-white">
            Register
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
</>
  )
}
