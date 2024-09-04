import { useEffect, useRef } from "react";
function AutoFocusForm() {
  const focusRef = useRef(null);
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);
  return (
    <form>
      <label>
        Name:
        <input type="text" ref={focusRef} />
      </label>
    </form>
  );
}

export default AutoFocusForm;
