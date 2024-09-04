// --------------------------практика 12 ---------------//
import { useRef, useEffect } from "react";
import "./App.css";
import ToggleText from "./components/ToggleText";

function App() {
  return (
    <div className="App">
      <ToggleText />
    </div>
  );
}

export default App;

// ------------------- Класная работа _---------------//

// import { useRef, useEffect } from "react";
// import "./App.css";
// import ClickCounter from "./components/clickCounter";
// import FleeButton from "./components/FleeButton";
// import ScrollBox from "./components/ScrollBox";
// import AutoFocusForm from "./components/AutoFocusForm";

// function App() {
//   const myRefButton = useRef(null);
//   console.log(myRefButton);

//   useEffect(() => {
//     if (myRefButton.current) {
//       myRefButton.current.addEventListener("click", () => {
//         console.log("button clicked");
//       });
//     }
//   }, []);
//   return (
//     <div className="App">
//       <AutoFocusForm />
//       <ClickCounter />
//       <FleeButton />
//       <ScrollBox />
//       <button ref={myRefButton}>Click me</button>
//       <button onClick={() => console.log("button clicked")} ref={myRefButton}>Click me</button>
//     </div>
//   );
// }

// export default App;
