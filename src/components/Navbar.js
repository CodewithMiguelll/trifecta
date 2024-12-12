import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md w-full  top-0 left-0 z-50">
      <nav className="md:flex items-center justify-between py-4 md:px-10 px-7 bg-clr">
        <a
          href="/"
          className="font-bold text-white text-2xl work-sans cursor-pointer flex items-center"
        >
          TRIFECTA
        </a>
        <button
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
          aria-controls="navbar-menu"
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} color="white" />
        </button>
        <ul
          id="navbar-menu"
          className={`md:flex md:items-center gap-7 md:pb-0 pb-12 absolute md:static md:z-auto z-50 left-0 md:w-auto w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 opacity-100 bg-[#b7b2b3]" : "top-[-490px] opacity-0"
          } md:opacity-100 md:bg-transparent`}
        >
          <li className="text-xl text-white md:my-0 my-7">
            <a href="/">Home</a>
          </li>
          <li className="text-xl text-white md:my-0 my-7">
            <a href="/about">About</a>
          </li>
          <li className="text-xl text-white md:my-0 my-7">
            <a href="/services">Services</a>
          </li>
          <li className="text-xl text-white md:my-0 my-7">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
