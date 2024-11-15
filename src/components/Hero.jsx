import { useState } from "react";
import Image from "next/image";
import Foto from "../assets/images/header.jpg";
import Navbar from "./Navbar";
import { FiChevronDown } from "react-icons/fi";
import ComingSoonModal from "./ComingSoonModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleArrowClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <section className="relative text-white font-sans">
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
          <Image
            src={Foto}
            alt="Imagen de fondo"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative container mx-auto flex items-center justify-center h-full px-4">
            <div className="hero-info text-center fade-in-bottom animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl md:mb-4 flex flex-wrap justify-center tracking-wide">
                Alpine
                <span className="italic text-cyan-200">&nbsp;elegance</span>
                &nbsp;and&nbsp;
                <span className="italic text-cyan-200">luxury</span>&nbsp;with
                modern style{" "}
              </h1>
              <button
                className="px-4 py-2 text-sm md:text-base lg:text-md bg-white bg-opacity-80 text-black hover:bg-green-200 transition-transform duration-200 transform hover:scale-105"
                onClick={handleArrowClick}
              >
                EXPLORE MORE
              </button>
            </div>
          </div>
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={handleArrowClick}
          >
            <FiChevronDown size={36} className="text-white animate-bounce" />
          </div>
          <ComingSoonModal showModal={showModal} closeModal={closeModal} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
