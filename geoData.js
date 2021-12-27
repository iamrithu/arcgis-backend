const mongoose = require("mongoose");
const schema = mongoose.Schema;

const data = new schema({
  shapeName: "",
  shapeType: "",
  geometry: {},
});

const GeoLocation = mongoose.model("GeoData", data);

module.exports = GeoLocation;
