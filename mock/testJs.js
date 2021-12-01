let Mock = require("mockjs"); //引入mock

module.exports = Mock.mock({
  status: 200,
  path: "/apijs/userList",
  data: [
    {
      name: "Gavin",
      age: 26
    },
    {
      name: "Gavin2",
      age: 26
    }
  ]
});

exports.name = "maybe";
