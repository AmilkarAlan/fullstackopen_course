const express = require("express");
const api = require("./apiRoute");
const info = require("./infoRoute");
const router = express.Router();


router.use("/api", api);
router.use("/info", info);

module.exports = router;