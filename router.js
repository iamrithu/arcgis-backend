const express = require("express");
const router = express.Router();

const GEO = require("./geoData");
const Register = require("./user");

//mobile
//get

router.get("/geolocation", (req, res) => {
  GEO.find().then((data) => {
    res.send(data);
  });
});
router.get("/geolocation/:id", (req, res) => {
  GEO.findOne({ shapeName: req.params.id }).then((data) => {
    res.send(data);
  });
});
//post

router.post("/geolocation", (req, res) => {
  console.log(req.body);
  GEO.create(req.body).then((data) => {
    res.send(data);
  });
});
//put

//delete

router.delete("/geolocation/:id", (req, res) => {
  GEO.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
//delete all
router.delete("/clear", async (req, res) => {
  try {
    await Location.deleteMany({});
  } catch (error) {
    console.log(error);
  }
});
//--------------------------

//register
router.get("/register", (req, res) => {
  Register.find().then((data) => {
    res.send(data);
  });
});
router.get("/register/:id", (req, res) => {
  Register.findOne({ shapeName: req.params.id }).then((data) => {
    res.send(data);
  });
});
//post
router.post("/register", (req, res) => {
  console.log(req.body);
  Register.create(req.body).then((data) => {
    res.send(data);
  });
});

module.exports = router;
