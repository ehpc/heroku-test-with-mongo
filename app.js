const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/learnAuth", {
//   useNewUrlParser: true
// });

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get('/', (req, res) => {
  res.render('index', {
    text: process.env.API_URL.replace('#INN#', '134235345435')
  });
});

// Обработка ошибок.
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
