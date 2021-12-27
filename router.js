const express = require("express");
const router = express.Router();
const Location = require("./data");
const GEO = require("./geoData");

//mobile
//get
router.get("/location", (req, res) => {
  Location.find().then((data) => {
    res.send(data);
  });
});
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
router.post("/location", (req, res) => {
  console.log(req.body);
  Location.create(req.body).then((data) => {
    res.send(data);
  });
});

router.post("/geolocation", (req, res) => {
  console.log(req.body);
  GEO.create(req.body).then((data) => {
    res.send(data);
  });
});
//put
router.put("/location/:id", (req, res) => {
  Location.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Location.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
});
//delete
router.delete("/location/:id", (req, res) => {
  Location.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
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

//computer

module.exports = router;
