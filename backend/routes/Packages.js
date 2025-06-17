const {GetAllPackages} = require("../controllers/GetAllPackages");

const router = require("express").Router();



router.get("/getAll", GetAllPackages);

module.exports = router;