const mongoose = require("mongoose");

//const host="localhost";
//const port ="27017";
//const db ="proyecto4";

exports.mongoConnect = () => {
  const mongoStringConnection = `mongodb+srv://admin:admin@proyectociclo4.7zkmeab.mongodb.net/dbproyecto?retryWrites=true&w=majority`;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    "error",
    console.error.bind(console, "Mongodb connection error")
  );
};
