// B1: Require các packages cần thiết
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// B2: Khởi tạo biến server đại diện cho toàn bộ
// HTTP request được khởi tạo trên server
const server = express();

// B2.1: Requires các routes đã được tách nhỏ ra
// và sử dụng trên server
const feedbackRoutes = require("./routes/feedback.routes");

// B3: Sử dụng các third-party middlewares/packages cần thiết
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(cors());
server.use(express.static("public"));

// B3.1: Sử dụng và đặt tên cho các routes cần dùng trên server
server.use("/api/v1/feedbacks", feedbackRoutes);

// B4: Khởi tạo các endpoint/url/routes cần thiết

server.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

// B5: Cho server go live/lắng nghe trên một cổng nào đó
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
