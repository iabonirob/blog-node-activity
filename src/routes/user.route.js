module.exports = (app) => {
  const users = require("../controllers/user.controller");

  const router = require("express").Router(); // GET all users

  router.get("/", users.findAll); // GET user by Id

  router.get("/:id", users.findById);
  app.use("/api/users", router);
};
