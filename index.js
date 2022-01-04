const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
//set up express
const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("server connected");
});
app.use("/", router);

//listen for requestc

app.listen(process.env.PORT || 4000, () => {
  console.log("now listing 4000");
});

//DB conection

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://iamrithi:iamrithi2029@cluster0.kkg7m.mongodb.net/acGIS?retryWrites=true&w=majority",
  () => {
    console.log("DB connected !!!");
  }
);
mongoose.Promise = global.Promise;
