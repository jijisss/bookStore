import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import JoinPage from "./pages/JoinPage.js";
import JoinDetailPage from "./pages/JoinDetailPage.js";
import BookOfMonth from "./pages/BookOfMonthPage.js";
import Find_id_password from "./pages/Find_id_passwordPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book_of_month" element={<BookOfMonth />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="find_id_password" element={<Find_id_password />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="join-detail" element={<JoinDetailPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
