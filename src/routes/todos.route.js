module.exports = (app) => {
  const todos = require("../controllers/todos.controller");

  const router = require("express").Router(); // GET all users

  router.get("/", todos.findAll); // GET user by Id

  router.get("/:id", todos.findById);
  router.post("/", todos.create);
  router.put("/:id",todos.update);
  router.delete("/:id",todos.delete);


  app.use("/api/todos", router);
};
