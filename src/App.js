import React, { useEffect, useRef, useState } from "react";
import Picture from "./components/Pictures";

const App = () => {
  const [title, setTitle] = useState("coucou les mais");
  const [show, setShow] = useState(false);
  const isShowInitialize = useRef(false);

  useEffect(() => console.log("composant app monté", []));
  useEffect(() => {
    if (isShowInitialize.current) {
      console.log("show mis a jour");
    } else {
      isShowInitialize.current = true;
    }
  }, [show]);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div>
      {console.log("JSXRender")}
      <h1> {title} </h1>
      <button onClick={handleClick}>click !</button>
      {show ? <Picture /> : null}
    </div>
  );
};

export default App;
