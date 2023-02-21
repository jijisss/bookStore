import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App.js";
import HomePage from "./pages/HomePage.js";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
