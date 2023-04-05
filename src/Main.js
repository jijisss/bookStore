import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import MyPage from "./pages/MyPage.js";
import CartPage from "./pages/CartPage.js";
import JoinPage from "./pages/JoinPage.js";
import JoinDetailPage from "./pages/JoinDetailPage.js";
import BookOfMonth from "./pages/BookDetailPage_month";
import Find_id_password from "./pages/Find_id_passwordPage";
import BookDetail_sayno from "./pages/BookDetailPage_sayno";
import BookDetail_swanBat from "./pages/BookDetailPage_swanBat.js";
import BookDetail_lastIsland from "./pages/BookDetailPage_lastIsland.js";
import BookDetailPage_bangju from "./pages/BookDetailPage_bangju.js";
import BookDetailPage_abyss from "./pages/BookDetailPage_abyss.js";
import BookDetailPage_mangeul from "./pages/BookDetailPage_mangeul.js";
import BookDetailPage_joguman from "./pages/BookDetailPage_joguman.js";
import BookDetailPage_ripe from "./pages/BookDetailPage_ripe.js";
import BookDetailPage_word from "./pages/BookDetailPage_word.js";
import BookDetailPage_star from "./pages/BookDetailPage_star.js";
import BookDetailPage_40class from "./pages/BookDetailPage_40class.js";
import BookDetailPage_ruleOfRich from "./pages/BookDetailPage_rule0fRich.js";
import BookDetailPage_stocksecret from "./pages/BookDetailPage_stocksecret.js";
import BookDetailPage_slamdunk from "./pages/BookDetailPage_slamdunk.js";
import BookDetailPage_battery from "./pages/BookDetailPage_battery.js";
import BookDetailPage_onething from "./pages/BookDetailPage_onething.js";
import BookDetailPage_againLife from "./pages/BookDetailPage_againLife.js";
import BookDetailPage_insight from "./pages/BookDetailPage_insight.js";
import BookDetailPage_convenienceStore from "./pages/BookDetailPage_convenienceStore.js";
import ScrollToTop from "./index.js";
import Registation from "./pages/Registation.js";
import RegistationBook from "./pages/RegistationBook.js";
import RegistationAuthor from "./pages/RegistationAuthor.js";

function Main() {
  return (
    <BrowserRouter>
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
          <Route path="/book-of-month" element={<BookOfMonth />} />
          <Route path="/book-detail-sayno" element={<BookDetail_sayno />} />
          <Route path="/book-detail-swanBat" element={<BookDetail_swanBat />} />
          <Route
            path="book-detail-lastIsland"
            element={<BookDetail_lastIsland />}
          />
          <Route
            path="book-detail-bangju"
            element={<BookDetailPage_bangju />}
          />
          <Route path="book-detail-abyss" element={<BookDetailPage_abyss />} />
          <Route
            path="book-detail-mangeul"
            element={<BookDetailPage_mangeul />}
          />
          <Route
            path="book-detail-joguman"
            element={<BookDetailPage_joguman />}
          />
          <Route path="book-detail-ripe" element={<BookDetailPage_ripe />} />
          <Route path="book-detail-word" element={<BookDetailPage_word />} />
          <Route path="book-detail-star" element={<BookDetailPage_star />} />
          <Route
            path="book-detail-40class"
            element={<BookDetailPage_40class />}
          />
          <Route
            path="book-detail-ruleOfRich"
            element={<BookDetailPage_ruleOfRich />}
          />
          <Route
            path="book-detail-stocksecret"
            element={<BookDetailPage_stocksecret />}
          />
          <Route
            path="book-detail-slamdunk"
            element={<BookDetailPage_slamdunk />}
          />
          <Route
            path="book-detail-battery"
            element={<BookDetailPage_battery />}
          />
          <Route
            path="book-detail-onething"
            element={<BookDetailPage_onething />}
          />
          <Route
            path="book-detail-againLife"
            element={<BookDetailPage_againLife />}
          />
          <Route
            path="book-detail-insight"
            element={<BookDetailPage_insight />}
          />
          <Route
            path="book-detail-convenienceStore"
            element={<BookDetailPage_convenienceStore />}
          />
          <Route path="registation" element={<Registation />} />
          <Route path="registationBook" element={<RegistationBook />} />
          <Route path="registationAuthor" element={<RegistationAuthor />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
