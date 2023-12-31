//* import -> require
require("dotenv").config();
require("./config/database");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("mern:server");
const usersRouter = require("./routes/api/users")

//* app
const app = express();

//* middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use("/api/users", usersRouter);


//* routes
app.get("/api", (req, res) => {
    res.json({ msg: "Hello World!" });
  });

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

  //* listen
  const port = process.env.PORT || 3000;
  
  app.listen(port, function () {
    debug(`Express app running on port ${port}`);
  });
  




