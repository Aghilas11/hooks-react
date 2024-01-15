import React, { useState } from "react";

const Picture = ({ imageName, index }) => {
  const [showCloseButton, setShowCloseButton] = useState(-1);
  return (
    <div
      key={index}
      className="picture"
      onMouseEnter={() => setShowCloseButton(index)}
      onMouseLeave={() => setShowCloseButton(-1)}
    >
      <img src={imageName} key={index} alt="izzane"></img>
      <button className={` ${index === showCloseButton ? "" : "hidden"} `}>
        X
      </button>
    </div>
  );
};

export default Picture;
