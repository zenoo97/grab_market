import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
const MainPage = () => {
  const [products, setProducts] = useState([]);
  const getProductData = () => {
    axios
      .get("http://localhost:8080/products")
      .then((item) => setProducts(item.data.products))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map((product, index) => {
            return (
              <div className="product-card" key={index}>
                <Link to={"/products/" + product.id} className="product-link">
                  <div>
                    <img
                      src={product.imageUrl}
                      className="product-img"
                      alt=""
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        src="images/icons/avatar.png"
                        alt=""
                        className="product-avatar"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
};
export default MainPage;
