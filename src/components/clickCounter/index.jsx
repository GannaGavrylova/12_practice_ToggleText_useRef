import { useState, useRef, useEffect } from "react";

function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "blue";
      buttonRef.current.style.color = "white";
      buttonRef.current.style.padding = "20px";
    }
  }, []);

  function handleClick() {
    setClickCount((prev) => prev + 1);
  }
  return (
    <div>
      <button onClick={handleClick} ref={buttonRef}>
        Click me
      </button>
      <p>Click count: {clickCount}</p>
    </div>
  );
}

export default ClickCounter;
