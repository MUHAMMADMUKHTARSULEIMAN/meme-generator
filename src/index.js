import {createRoot} from "react-dom/client";
import App from "./App";
// import WindowTracker from "./Windiow-tracker";

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);