import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Product from "../Components/Product";
import Service from "../Components/Service";
import About from "../Components/About";
import ProductDetail from '../Components/ProductDetail'
const MainRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/details" element={<ProductDetail />} />
      <Route path="/services" element={<Service />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default MainRouts;
