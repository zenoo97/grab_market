import MainPage from "./main/MainPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductPage from "./product/ProductPage";
import UploadPage from "./upload/UploadPage";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="header">
          <div id="header-area">
            <Link to="/">
              <img src="/images/icons/logo.png" alt="" />
            </Link>
            <Link to="/upload">
              <Button size="large" icon={<DownloadOutlined />}>
                상품 업로드
              </Button>
            </Link>
          </div>
        </div>
        <div id="body">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Routes>
        </div>
        <div id="footer"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
