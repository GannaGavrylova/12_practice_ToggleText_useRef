import { useRef } from "react";
function FleeButton() {
  const buttonRef = useRef(null);

  function handleMouseMove() {
    const button = buttonRef.current;
    if (button) {
      const newX = Math.random() * (window.innerWidth - button.offsetWidth);
      const newY = Math.random() * (window.innerHeight - button.offsetHeight);

      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
    }
  }

  return (
    <button
      onMouseMove={handleMouseMove}
      style={{ position: "absolute" }}
      ref={buttonRef}
    >
      Run away!
    </button>
  );
}

export default FleeButton;
