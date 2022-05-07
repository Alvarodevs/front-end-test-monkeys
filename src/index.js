//import react into the bundle
import React from "react";
import {createRoot} from 'react-dom/client';

//include bootstrap npm library into the bundle
//import "bootstrap";

import "./styles/index.css";

//import your own components
import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);