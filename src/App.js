import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavouritesPage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SupportPage from "./pages/SupportPage";


function App() {
  return (
    <>

      <Router>
        {/* <Navbar />
        <Header /> */}
        <Routes>
       
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products/detail/:id" element={<ProductDetailPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/carts" element={<CartPage />} />
          <Route path="/favourites" element={<FavoritePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/support" element={<SupportPage />} />

        </Routes>
      </Router>
    </>
  );

}

export default App;