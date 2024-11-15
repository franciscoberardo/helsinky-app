// components/ComingSoonModal.js
import React from "react";

const ComingSoonModal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40">
      <div className="bg-white p-4 rounded-md text-center max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Exciting things are on the way!
        </h2>
        <p className="text-gray-700">
          We're currently working on this section. Stay tuned!
        </p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-green-200 text-black hover:bg-green-300 rounded transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ComingSoonModal;
