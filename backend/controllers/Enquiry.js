const EnquiryModel = require("../models/Enquiry.js")

const Enquiry = async (req,res)=>{
    try {
        // console.log(req.body,"req.bodyreq.body");
        const { name, phone, travelernumber,leavingFrom,goingTo,additionalDetails } = req.body;
        // console.log(name, email, password,"signup COntroller");
        // const existingUser = await UserModel.findOne({ phone });
        // if (existingUser) {
        //     return res.status(409).json({ success: false, message: 'Email already exists' });
        // }
        const EnquiryNew = new EnquiryModel({ name, phone, travelernumber,leavingFrom,goingTo,additionalDetails });
        // user.password = await bcrypt.hash(password, 10);
        await EnquiryNew.save();
        res.status(201).json({ success: true, message: "Enquiry Submitted" });
    } catch(error) {
        console.log(error.code);
        res.status(500).json({ message: 'Internal Server Error', success: false,error });
    }
}

module.exports = {Enquiry};
