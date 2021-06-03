const db = require("../models");
const Tutorial = db.tutorials;
const Operator = db.Sequelize.Op;

exports.create = (req, res) => {
  // validar o request
  if (!req.body.title) {
    res.status(400).send({
      message: "Request vazio",
    });
    return;
  }

  // criar o model Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  console.log(tutorial);

  // salvando o tutorial no bd
  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao salvar registro",
      });
    });
};

exports.findAll = (req, res) => {
  Tutorial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao consultar registros",
      });
    });
};

exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao consultar registros",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Tutorial.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao consultar registros",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Tutorial.update(req.body, { where: { id: id } })
    .then((isUpdated) => {
      if (isUpdated == 1) {
        res.send({ message: "Atualizado com suceso!" });
      } else {
        res.status(422).send({ message: "Falha ao atualizar registro(s)" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao atualizar registros",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Tutorial.destroy({ where: { id: id } })
    .then((isDeleted) => {
      if (isDeleted == 1) {
        res.send({ message: "Deletado com suceso!" });
      } else {
        res.status(422).send({ message: "Falha ao deletar registro(s)" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao deletar registros",
      });
    });
};
