module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller");

  var router = require("express").Router();

  // criar novo
  // router.post("/", tutorials.create);

  // retornar todos
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/", router);
};
