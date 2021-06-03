const Repository = require("../repository/tutorial.repository");

const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

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
