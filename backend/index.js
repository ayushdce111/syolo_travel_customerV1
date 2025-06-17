const express = require("express");
const app = express();
require('dotenv').config();
require("./models/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./routes/AuthRouter");
const ProductRouter = require("./routes/ProductRouter");
const Packages = require("./routes/Packages");
const Enquiry = require("./routes/Enquiry")

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

app.use("/auth",AuthRouter);
app.use("/api/",Packages);
app.use("/customer/",Enquiry);
app.use("/products",ProductRouter);

app.get("/",(req,res)=>{
    console.log("hi");
    res.send("Hello World");
})

app.listen(PORT,()=>{console.log(`server running at ${PORT}`)});