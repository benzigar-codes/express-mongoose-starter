// Requirements
const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()

// Mongoose connect
mongoose.connect("mongodb://127.0.0.1:27017/game-of-thrones", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MONGODB is connected")
});

// MIDDLEWARE
app.use(express.json())

// Routes
app.use(require("./routes/characterRoutes.js"))

// App Listern
app.listen(process.env.PORT,() => console.log("Server created"))