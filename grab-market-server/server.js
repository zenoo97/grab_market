const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json()); // express의 app에 대한 설정을 해준다. json 형식을 사용해서 정보를 전달할 수 있게 해준다.
app.use(cors()); // 모든 브라우저에서 서버에 요청할 수 있다.
app.get("/products", (req, res) => {
  const query = req.query;
  console.log("query : " + JSON.stringify(query));
  res.send({
    products: [
      {
        id: 1,
        name: "농구공",
        price: 100000,
        seller: "조던",
        imageUrl: "/images/products/basketball1.jpeg",
      },
      {
        id: 2,
        name: "축구공",
        price: 50000,
        seller: "메시",
        imageUrl: "/images/products/soccerball1.jpg",
      },
      {
        id: 3,
        name: "키보드",
        price: 30000,
        seller: "그랩",
        imageUrl: "/images/products/keyboard1.jpg",
      },
    ],
  });
});
app.post("/products", (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
});
app.get("/products/:id/event/:eventId", (req, res) => {
  const params = req.params;
  const { id, eventId } = params;
  res.send("id : " + id + "eventId : " + eventId);
});
app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");
});
