import "./App.css";
import Footer from "./components/Footer/Footer";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AllCollectionsPage from "./pages/AllCollections/AllCollectionsPage";
import HomePage from "./pages/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";

function App() {
  return (
    <div>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/allCollections" element={<AllCollectionsPage />} />
        <Route path="/productDetails" element={<ProductDetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
