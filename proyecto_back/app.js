var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let cors = require("cors");

var database = require("./config/database");
//var auth = require("./auth/main_auth");

//router
var maquinasRouter = require("./routes/maquinas.router");
var clientesRouter = require("./routes/clientes.router");
var usuariosRouter = require("./routes/usuario.router");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//mongo connection
database.mongoConnect();

app.use("/usuarios", usuariosRouter);
//app.use(auth)

//router
app.use(cors());
app.use("/clientes", clientesRouter);
app.use("/maquinas", maquinasRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const port = 4000;

app.listen(port, () => {
  console.log(port);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
