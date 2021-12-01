let express = require("express"); //引入express
const apis = require("../mock/index.js");

let app = express(); //实例化express

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

apis.forEach(item => {
  app.use(item.path, function(req, res) {
    res.json(item.api);
  });
});

// app.use("/api/test", function(req, res) {
//   res.json(Mock.mock(require("../mock/test.json")));
// });

app.listen("8090", () => {
  console.log("监听端口 8090");
});
