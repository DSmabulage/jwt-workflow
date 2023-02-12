const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const AuthRoute = require("./routes/authRoute");
const ProtectedRoute = require("./routes/protectedRoute");

app.use("/api/auth", AuthRoute);
app.use("/api/protected", ProtectedRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
