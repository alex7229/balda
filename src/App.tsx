import React, { useEffect, useMemo, useState } from "react";
import MainScreen from "./screens/main-screen/main-screen";
import "./app.css";

function App() {
  const [height, setHeight] = useState(797);
  const windowWidth = useMemo(() => {
    return (height * 3) / 4;
  }, [height]);

  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener("resize", (event) => {
      setHeight(window.innerHeight);
    });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page" style={{ height: height, width: windowWidth }}>
        <MainScreen />
      </div>
    </div>
  );
}

export default App;
