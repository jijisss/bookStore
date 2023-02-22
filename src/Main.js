import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App.js";
import HomePage from "./pages/HomePage.js";
import Login from "./components/Login.js";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
