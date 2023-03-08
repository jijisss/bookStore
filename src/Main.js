import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import JoinPage from "./pages/JoinPage.js";
import JoinDetailPage from "./pages/JoinDetailPage.js";
import BookOfMonth from "./pages/BookDetailPage_month";
import Find_id_password from "./pages/Find_id_passwordPage";
import BookDetail_saino from "./pages/BookDetailPage_saino";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="find-id-password" element={<Find_id_password />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="join-detail" element={<JoinDetailPage />} />
          <Route path="/book-of-month" element={<BookOfMonth />} />
          <Route path="/book-detail-saino" element={<BookDetail_saino />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
