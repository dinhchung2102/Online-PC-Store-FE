import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Configuration_Design from "./pages/Configuration_Design";
import Mouse_all from "./pages/Mouse_all";
import Shopping_Cart from "./pages/Shopping_Cart";
import ListProduct from "~/pages/ListProduct";
import Article_Details from "./pages/Article_Details";
import Technology_news from "./pages/technology_news";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/configuration-design"
          element={<Configuration_Design />}
        />
        <Route path="/mouse-all" element={<Mouse_all />} />
        <Route path="/shopping-cart" element={<Shopping_Cart />} />
        <Route path="/article-details" element={<Article_Details />} />
        <Route path="/Technology_news" element={<Technology_news />} />
        <Route path="/products/:category" element={<ListProduct />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
