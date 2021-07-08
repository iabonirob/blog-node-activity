const axios = require("axios");

exports.findAll = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((apicall) => {
    res.send(apicall.data);
  });
};
//get a blogpost by id
exports.findById = (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
//create a blogpost
exports.create = (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts/", {
      title: req.body.title,
      body: req.body.body,
      userID: req.body.userID,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};
//update a blogpost
exports.update = (req, res) => {
  axios
    .put("https://jsonplaceholder.typicode.com/posts/" + req.params.id, {
      id: req.body.id,
      title: req.body.title,
      body: req.body.body,
      userID: req.body.userID,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.delete = (req, res) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
