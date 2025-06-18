const AdminTravelPackagesModel = require("../models/AdminTravelPackages.js")

const GetAdminPackages = async (req,res)=>{
    // console.log(res.body,"<------------req data")
    try{
        const packages = await AdminTravelPackagesModel.find().sort({submittedAt:-1});
        // console.log(packages);
        res.status(200).json(packages);
    }catch(error){
        // console.log(error,"error");
        res.status(500).json({message:error.message});
    }
}

module.exports = {GetAdminPackages};
