import React, { useState, useEffect } from "react";

const ModalLimitReached = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showModal && (
        <div className="message-modal">
          <div className="modal-content flex flex-col">
            <h2>You have reached your note limit. Get a premium account to add more notes.</h2>
            <button className=' bg-[#fd5c58] 
            text-[#fff1f3] p-2 m-5 drop-shadow-lg rounded-sm w-[30%] self-center' 
            onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLimitReached;

