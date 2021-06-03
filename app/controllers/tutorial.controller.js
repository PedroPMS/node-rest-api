const Repository = require("../repository/tutorial.repository");

exports.findAll = (req, res) => {
  Repository.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao consultar registros",
      });
    });
};
