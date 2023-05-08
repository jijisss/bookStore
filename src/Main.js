import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import MyPage from "./pages/MyPage.js";
import CartPage from "./pages/CartPage.js";
import JoinPage from "./pages/JoinPage.js";
import JoinDetailPage from "./pages/JoinDetailPage.js";
import BookDetailPage from "./pages/BookDetailPage.js";
import Find_id_password from "./pages/Find_id_passwordPage";
import ScrollToTop from "./index.js";
import RegistationPage from "./pages/RegistationPage.js";
import ModificationBookInfo from "./pages/ModificationBookInfo.js";
import ReviewPage from "./pages/ReviewPage.js";
import ReviewWritePage from "./pages/ReviewWritePage.js";

function Main() {
  return (
    <BrowserRouter basename="/bookStore/">
      <ScrollToTop />
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="MyPage" element={<MyPage />} />
          <Route path="CartPage" element={<CartPage />} />
          <Route path="find-id-password" element={<Find_id_password />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="join-detail" element={<JoinDetailPage />} />
          <Route path="bookDetailPage" element={<BookDetailPage />} />
          <Route path="registation" element={<RegistationPage />} />
          <Route
            path="modificationBookInfo"
            element={<ModificationBookInfo />}
          />
          <Route path="review" element={<ReviewPage />} />
          <Route path="review-write" element={<ReviewWritePage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
