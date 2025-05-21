import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "~/pages/Home";
import Configuration_Design from "~/pages/Configuration_Design";
import Mouse_all from "~/pages/Mouse_all";
import Shopping_Cart from "~/pages/Shopping_Cart";
import ListProduct from "~/pages/ListProduct/ListProduct";
import Article_Details from "~/pages/Article_Details";
import Technology_news from "~/pages/Technology_news";
import Blogs from "~/pages/Blogs";
import DetailProduct from "~/pages/DetailProduct";
import Admin from "../pages/Admin/AdminLayout";
import Products from "../pages/Admin/Products";
import Detail_Account from "~/pages/Detail_Account";
import AdminRoute from "./PrivateRoute";
import NotFoundPage from "~/pages/NotFound";
import FilterProduct from "~/pages/ListProduct/FilterProduct";
import OrderSuccess from "~/pages/OrderSuccess";

function MyRouter() {
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
        <Route path="/technology-news" element={<Technology_news />} />
        <Route path="/products/*" element={<ListProduct />} />
        <Route path="/search/*" element={<FilterProduct />} />
        <Route path="/detailProduct/:idProduct" element={<DetailProduct />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/Detail_Account" element={<Detail_Account />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;
