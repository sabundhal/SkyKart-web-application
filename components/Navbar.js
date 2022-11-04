import React from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { BsFillBagCheckFill, BsFillCartXFill } from "react-icons/bs";

import { useRef } from "react";

const Navbar = ({cart, addtoCart, removeFromCart, clearCart, subTotal}) => {
  console.log(cart, addtoCart, removeFromCart, clearCart, subTotal)
  const toggle = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-purple-600 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-purple-500">Skykart</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap space-x-5 items-center text-x justify-center shadow-md ">
            <Link href={"/"}>
              <a className="mr-5 font-bold hover:text-gray-900">Home</a>
            </Link>
            <Link href={"/mobile"}>
              <a className="mr-5 font-bold hover:text-gray-900">Mobiles</a>
            </Link>
            <Link href={"/accessories"}>
              <a className="mr-5 font-bold hover:text-gray-900">Assessories</a>
            </Link>
            <Link href={"/about"}>
              <a className="mr-5 font-bold hover:text-gray-900">About</a>
            </Link>
          </nav>

          <div className="cart absolute right-0 top-4 mx-5 cursor-pointer flex">
            <Link href={"/login"}>
              <MdAccountBox className="md:text-3xl mx-2" />
            </Link>
            <AiOutlineShoppingCart onClick={toggle} className="md:text-3xl" />
          </div>
          <div
            ref={ref}
            className="sideCart absolute top-0 right-0 bg-purple-300 p-10 transform transition-transform translate-x-full w-72 h-full"
          >
            <h2 className="font-bold text-xl">Shopping cart</h2>
            <span
              onClick={toggle}
              className="absolute top-2 right-2 text-2xl text-purple-500 cursor-pointer  "
            >
              <AiFillCloseCircle />
            </span>
            <ol className="list-decimal font-bold">
              {Object.keys(cart).length==0 && <div className="my-4 font-normal">No item in the cart</div>}
              {Object.keys(cart).map((k)=>{return <li key={k}>
                <div className="flex my-5">
                  <div className="w-2/3 font-semibold ">
                  {cart[k].name}
                  </div>
                  <div className=" items-center justify-center flex w-1/3">
                    <AiFillMinusCircle onClick={()=>{removeFromCart(k, cart[k].price, cart[k].name)}} className="mx-1 text-2xl text-purple-500 cursor-pointer" />
                    {cart[k].qty}
                    <AiFillPlusCircle onClick={()=>{addtoCart(k, cart[k].price, cart[k].name)}} className=" cursor-pointer mx-1 text-2xl text-purple-500" />
                  </div>
                </div>
              </li>})}
      
            </ol>
            <button className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
              
              <BsFillBagCheckFill className="m-1" /> Checkout
            </button>
            <button onClick={clearCart} className="flex mx-auto mt-16 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
              
              <BsFillCartXFill className="m-1" /> Clearcart
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
