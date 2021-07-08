const axios = require("axios");
exports.findAll = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.create = (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/todos/", {
      userID: req.body.userID,
      id: req.body.id,
      title: req.body.title,
      completed: req.body.completed,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.update = (req, res) => {
  axios
    .put("https://jsonplaceholder.typicode.com/posts/" + req.params.id, {
      userID: req.body.userID,
      id: req.body.id,
      title: req.body.title,
      completed: req.body.completed,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.delete = (req, res) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
