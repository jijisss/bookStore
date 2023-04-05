import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main.js";
import "./assets/Fonts/Font.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
