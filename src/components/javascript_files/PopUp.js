import React from "react";

const PopUp = ({ content, handleClose }) => {
  return (
    <div className="popup">
      <div className="popupInner">
        <button className="close-btn" onClick={handleClose}>
          x
        </button>
        {content}
      </div>
    </div>
  );
};

export default PopUp;
