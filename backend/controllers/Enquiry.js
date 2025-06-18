const EnquiryModel = require("../models/Enquiry.js")

const Enquiry = async (req,res)=>{
    try {
        const { name, phone, message } = req.body;
        // console.log(name, email, password,"signup COntroller");
        // const existingUser = await UserModel.findOne({ phone });
        // if (existingUser) {
        //     return res.status(409).json({ success: false, message: 'Email already exists' });
        // }
        const EnquiryNew = new EnquiryModel({ name, phone, message });
        // user.password = await bcrypt.hash(password, 10);
        await EnquiryNew.save();
        res.status(201).json({ success: true, message: "Enquiry Submitted" });
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

module.exports = {Enquiry};
