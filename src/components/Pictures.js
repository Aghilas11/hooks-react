import React, { useEffect, useState } from "react";
import Picture from "./Picture";

const Pictures = () => {
  const [images, setImages] = useState(["nord.jpeg", "nord2.png", "nord3.png"]);
  const [image, setImage] = useState(null);

  function ImagesComponent() {
    return images.map((name, index) => (
      <Picture imageName={name} index={index} />
    ));
  }

  const handleImageName = (e) => {
    setImage(e.target.value);
  };

  const addImageName = () => {
    let newImages = [...images, image];
    setImages(newImages);
  };

  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log("timer appelé");
    }, 1000);

    return () => clearInterval(myTimer);
  }, []);
  return (
    <div>
      <div className="pictures">
        <ImagesComponent />
      </div>
      <div>
        <input type="text" onChange={handleImageName} />
        <button type="submit" onClick={addImageName}>
          {" "}
          Inscrire le nom d'1 image{" "}
        </button>
      </div>
    </div>
  );
};

export default Pictures;
