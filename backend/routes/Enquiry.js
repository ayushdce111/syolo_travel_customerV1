const {Enquiry} = require("../controllers/Enquiry.js");

const router = require("express").Router();



router.post("/enquirydata", Enquiry);

module.exports = router;