module.exports = [
  {
    api: require("./user.json"),
    path: "/api/userList"
  },
  {
    api: require("./test.json"),
    path: "/api/test"
  },
  {
    api: require("./testJs.js"),
    path: "/apijs/userList"
  }
];

exports.name = "maybe";
