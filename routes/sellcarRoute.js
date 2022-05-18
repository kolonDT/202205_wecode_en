const express = require("express");
const router = express.Router();

const sellcarController = require("../controllers/sellcarController");

router.get("", sellcarController.getInfoByCarNumber);

module.exports = router;
