import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./productpage.css";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductData = async () => {
    await axios
      .get("http://localhost:8080/products/" + id)
      .then((result) => setProduct(result.data.product))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProductData();
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product?.imageUrl} alt="" />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt="" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2024년 01월 15일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
};
export default ProductPage;
