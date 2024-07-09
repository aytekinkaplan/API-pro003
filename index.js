const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use("/users", userRouter); // "/users" eklemek, URL'lerin daha anlaşılır olmasını sağlar

module.exports = app;
