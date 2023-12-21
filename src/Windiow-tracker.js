import {useEffect, useState} from "react";

export default function WindowTracker() {
  const [tracker, setTracker] = useState(true);

  function toggleTracker(e) {
    e.preventDefault();
    setTracker(prevTracker => !prevTracker);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      e.preventDefault();
      setWindowWidth(window.innerWidth);
    });
  }, []);
  

  return(
    <div>
      <button onClick={toggleTracker}>{tracker ? "hide" : "show"} window width</button>
      {tracker && <h1 style={{"color": "blue"}}>Window width: {windowWidth}</h1>}
    </div>
  )
};