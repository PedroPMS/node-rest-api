module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller");
  var router = require("express").Router();

  // criar novo
  router.post("/", tutorials.create);

  // retornar todos
  router.get("/", tutorials.findAll);

  // retornar todos os publicados
  router.get("/publicados", tutorials.findAllPublished);

  // retornar pelo ib
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  app.use("/", router);
};
