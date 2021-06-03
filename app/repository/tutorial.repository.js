const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.findAll = async () => {
  return await Tutorial.findAll();
};
