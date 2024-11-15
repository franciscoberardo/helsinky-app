import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import ComingSoonModal from "./ComingSoonModal"; // Importar el modal

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para el modal
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setShowModal(true); // Mostrar modal al hacer clic en un elemento del menú
    setIsOpen(false); // Cerrar el menú
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full z-20 grid grid-cols-3 items-center px-6 text-white transition duration-300 ${
        scrolling ? "bg-black bg-opacity-30 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-start">
        <button
          onClick={toggleMenu}
          className="flex items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <p></p>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <a href="/" className="flex justify-center col-span-1">
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          className="object-contain transition-transform duration-300 transform hover:scale-125"
        />
      </a>

      <div className="flex items-center justify-end hidden md:flex">
        <button className="px-3 py-2 bg-white bg-opacity-80 text-black hover:bg-green-200 transition-transform duration-200 transform hover:scale-105" onClick={handleMenuItemClick}>
          BOOK NOW
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full z-30 flex transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <nav
          ref={menuRef}
          className={`fixed top-0 left-0 w-4/5 md:w-1/4 h-full bg-black bg-opacity-90 flex flex-col items-center py-8 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-8 mt-4">
            <Image
              src={Logo}
              alt="Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {["Home", "About", "Contact", "Location"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-xl font-semibold text-white hover:text-red-400 transition duration-300 py-4"
              aria-label={item}
              onClick={handleMenuItemClick} // Mostrar modal al hacer clic
            >
              {item}
            </a>
          ))}

          <div className="flex items-center justify-end py-8">
            <button className="px-3 py-2 bg-white bg-opacity-80 text-black hover:bg-green-200 transition-transform duration-200 transform hover:scale-105" onClick={handleMenuItemClick}>
              BOOK NOW
            </button>
          </div>
        </nav>
      </div>

      <ComingSoonModal showModal={showModal} closeModal={closeModal} />
    </header>
  );
};

export default Navbar;
