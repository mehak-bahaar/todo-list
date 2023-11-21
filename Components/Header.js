"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () =>{
    setisOpen(!isOpen) 
  }
  return (
    <>
      <nav className="flex justify-between items-center px-3 py-4 bg-transparent">
        <div className=" pl-5 flex items-center justify-between gap-6   ">
          <h1 className="text-[4vw] font-bold ">MB</h1>
          <h1 className="text-[2.5vw]">My TODO List</h1>
        </div>
        <div className="md:hidden">
          <div className="text-white cursor-pointer" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
          <ul
            className={`absolute top-14 right-0 ${
              isOpen ? `block` : `hidden`
            } bg-transparent`}
          >
            <Link
              className="hover:scale-110 ease-in-out duration-300 hover:ease-in-out text-sm sm:text-[1.5vw] font-bold"
              href="/"
            >
              Add Tasks
              <br />
            </Link>
            <Link
              className="hover:scale-110 ease-in-out duration-300 hover:ease-in-out text-sm sm:text-[1.5vw] font-bold space-y-2"
              href="/Tasks"
            >
              View Tasks
            </Link>
          </ul>
        </div>
        <ul className=" hidden md:flex justify-between items-center gap-7 pr-5 space-x-4">
          <Link
            className="hover:scale-110 ease-in-out duration-300 hover:ease-in-out text-sm sm:text-[1.5vw] font-bold"
            href="/"
          >
            Add Tasks
          </Link>
          <Link
            className="hover:scale-110 ease-in-out duration-300 hover:ease-in-out text-sm sm:text-[1.5vw] font-bold"
            href="/Tasks"
          >
            View Tasks
          </Link>
        </ul>
      </nav>
    </>
  );
};


// components/NavBar.js
// import React, { useState } from 'react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="flex items-center justify-between">
//         <div className="text-white">Your Logo</div>
//         <div className="md:hidden">
//           <div className="text-white cursor-pointer" onClick={toggleMenu}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </div>
//           <ul className={`absolute top-14 right-0 bg-gray-800 p-4 space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
//             <li className="text-white">Home</li>
//             <li className="text-white">About</li>
//             <li className="text-white">Contact</li>
//           </ul>
//         </div>
//         <ul className="hidden md:flex space-x-4">
//           <li className="text-white">Home</li>
//           <li className="text-white">About</li>
//           <li className="text-white">Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;


export default Header;
