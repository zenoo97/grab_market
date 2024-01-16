import MainPage from "./main/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./product/ProductPage";
import UploadPage from "./upload/UploadPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
