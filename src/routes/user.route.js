module.exports = (app) => {
  const users = require("../controllers/user.controller");

  const router = require("express").Router(); // GET all users

  router.get("/", users.findAll); // GET user by Id
  router.get("/:id", users.findById);
  router.post("/", users.create);
  router.put("/:id",users.update);
  router.delete("/:id",users.delete);


  app.use("/api/users", router);
};
