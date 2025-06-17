const AllTravelPackagesModel = require("../models/AllTravelPackages.js")

const GetAllPackages = async (req,res)=>{
    try{
        const packages = await AllTravelPackagesModel.find().sort({submittedAt:-1});
        console.log(packages);
        res.status(200).json(packages);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = {GetAllPackages};
