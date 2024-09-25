import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChatFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdCircleNotifications, MdTextSnippet } from "react-icons/md";
import { FaLaughSquint, FaUserCircle } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";

function Navbar({ storeValue, setSelectedtab, selectedtab }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleOnSearch = (e) => {
    storeValue(e.target.value);
    console.log(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="border-b-2 border-white-400 text-white fixed w-full top-0 left-0 shadow-lg z-50 bg-black/80 backdrop-blur-sm">
      <div className="flex items-center">
        <NavLink
          to="/"
          className="text-2xl mb-2 text-white no-underline font-bold hover:text-green-400"
        >
          Conversate
        </NavLink>

        <button
          className="text-white lg:hidden flex items-center"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
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
            />
          </svg>
        </button>

        <nav
          className={`lg:flex flex-grow items-center ${
            isNavbarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col mt-2 lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
            <li>
              <NavLink
                to="/"
                className="no-underline text-white flex items-center text-lg hover:bg-gray-700 px-2 py-2 rounded transition"
              >
                <MdTextSnippet size="28" className="mr-2" />
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Chat"
                className="flex no-underline text-white items-center text-lg hover:bg-gray-700 px-2 py-2 rounded transition"
              >
                <BsChatFill size="24" className="mr-2 text-green-400" />
                Chat
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Memes"
                className="flex no-underline text-white items-center text-lg hover:bg-gray-700 px-2 py-2 rounded transition"
              >
                <FaLaughSquint size="24" className="mr-2 text-yellow-400" />
                Memes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Facts"
                className="flex no-underline text-white items-center text-lg hover:bg-gray-700 px-2 py-2 rounded transition"
              >
                <TfiThought size="22" className="mr-2" />
                Facts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Videos"
                className="flex no-underline text-white items-center text-lg hover:bg-gray-700 px-2 py-2 rounded transition"
              >
                <BiSolidVideos size="26" className="mr-2 text-red-600" />
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Noti"
                className="flex no-underline text-white items-center text-lg hover:bg-gray-700 px-2 py-2 rounded transition"
              >
                <MdCircleNotifications
                  size="26"
                  className="mr-2 text-yellow-200"
                />
                Notifications
              </NavLink>
            </li>
          </ul>
        </nav>

        <form
          className="hidden lg:flex mb-1 space-x-2 mr-3"
          role="search"
          onSubmit={handleOnSubmit}
        >
          <NavLink to="Search">
            <input
              type="search"
              className="px-2 py-1 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Search"
              onChange={handleOnSearch}
            />
          </NavLink>
        </form>

        <div className="hidden lg:flex items-center mr-5">
          <NavLink
            to="/Profile"
            className="flex items-center gap-2 no-underline mb-1 text-white hover:text-green-400 deco"
          >
            <FaUserCircle className="text-2xl" />
            Logout
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
