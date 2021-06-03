const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));
// faz o parse para os requests com content-type - application/json
app.use(express.json());
// faz o parse para os requests com content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// //Em desenvolvimento, force = true é para dropar as tabelas
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
