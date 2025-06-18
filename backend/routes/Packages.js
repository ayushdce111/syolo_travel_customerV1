const {GetAdminPackages} = require("../controllers/GetAdminPackages");
const {GetAgentPackages} = require("../controllers/GetAgentPackages");

const router = require("express").Router();



router.get("/getAdminPackages", GetAdminPackages);
router.get("/getAgentPackages", GetAgentPackages);

module.exports = router;