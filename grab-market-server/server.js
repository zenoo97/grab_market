const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");

const port = 8080;

app.use(express.json()); // express의 app에 대한 설정을 해준다. json 형식을 사용해서 정보를 전달할 수 있게 해준다.
app.use(cors()); // 모든 브라우저에서 서버에 요청할 수 있다.

app.get("/products", (req, res) => {
  models.Products.findAll({
    // limit: 1, 조회 개수 제한
    // order: [["createdAt", "DESC"]],
    attributes: ["id", "name", "price", "createdAt", "seller", "imageUrl"], // 가져올 column을 정해줌
  })
    .then((result) => {
      console.log("성공!!!!!");
      res.send({
        products: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("에러 발생");
    });

  // const query = req.query;
  // console.log("query : " + JSON.stringify(query));
  // res.send({
  //   products: [
  //     {
  //       id: 1,
  //       name: "농구공",
  //       price: 100000,
  //       seller: "조던",
  //       imageUrl: "/images/products/basketball1.jpeg",
  //     },
  //     {
  //       id: 2,
  //       name: "축구공",
  //       price: 50000,
  //       seller: "메시",
  //       imageUrl: "/images/products/soccerball1.jpg",
  //     },
  //     {
  //       id: 3,
  //       name: "키보드",
  //       price: 30000,
  //       seller: "그랩",
  //       imageUrl: "/images/products/keyboard1.jpg",
  //     },
  //   ],
  // });
});
app.post("/products", (req, res) => {
  const body = req.body;
  const { name, description, price, seller } = body;
  if (!name || !description || !price || !seller) {
    res.send("모든 필드를 입력해주세요.");
  }
  models.Product.create({
    name,
    description,
    price,
    seller,
  })
    .then((result) => {
      console.log("상품 생성 결과 : ", result);
      res.send({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("상품 업로드에 문제가 발생하였습니다.");
    });
});
app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  models.Products.findOne({
    where: {
      id: id,
    },
  })
    .then((result) => {
      console.log("PRODUCT : " + result);
      res.send({
        product: result,
      });
    })
    .catch((err) => {
      console.log(err);
      console.log("상품 조회에 에러 발생");
    });
});
app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB 연결 성공");
    })
    .catch((err) => {
      console.log(err);
      console.log("DB 연결 에러 발생");
      process.exit(); // db 연결이 안되면 프로세스를 종료하겠다는 것
    }); // models에 테이블 관련된 모델링이 필요한 데이터를 넣을 것인데, db와 동기화 시키겠다는 것
});
