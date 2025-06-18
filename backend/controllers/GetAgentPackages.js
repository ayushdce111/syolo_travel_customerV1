const AgentTravelPackagesModel = require("../models/AgentTravelPackages.js")

const GetAgentPackages = async (req,res)=>{
    // console.log(res.body,"<------------req data")
    // const { userEmail } = req.query;
    // console.log(req.query,"<-------------req.query",userEmail)
    try{
        const packages = await AgentTravelPackagesModel.find({ package_status: 'Approved'}).sort({submittedAt:-1});
        // console.log(packages);
        res.status(200).json(packages);
    }catch(error){
        console.log(error,"error");
        res.status(500).json({message:error.message});
    }
}

module.exports = {GetAgentPackages};
