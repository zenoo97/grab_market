const http = require("http");
const hostname = "127.0.0.1"; // 내 컴퓨터 주소를 의미
const port = 8080;

const server = http.createServer((req, res) => {
  const path = req.url;
  console.log("path: " + path);
  const method = req.method;

  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
    }
  }
  res.end("Good Bye!");
});
server.listen(port, hostname); // 요청을 port, hostname으로 기다리고 있겠다는 의미
console.log("grab market server on!");
