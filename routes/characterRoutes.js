const express = require("express")
const router = express()
const characterController= require("../controllers/characterController.js")

// Controllers
router.get("/characters",characterController.all)

module.exports = router