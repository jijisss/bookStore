import Header from "./Header";
import Footer from "./Footer";
import styles from "./default.css";

function App({ children }) {
  return (
    <>
      <Header />
      <div className={styles.body}>{children}</div>
      <Footer />
    </>
  );
}

export default App;
