const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminTravelPackagesSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique: true
    },
    destinations: {
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    prices:{
        type:String,
        required:true,
    },
    travelMode:{
        type:String,
        required:true,
    },
    inclusions: {
        type:String,
        required:true,
    },
    availability: {
        type:String,
        required:true,
    },
    user_email:{
        type:String,
        required:true,
    },
    submittedAt: {
    type: Date,
    default: Date.now,
  },
    image_url: {
    type:String,
  },
  public_id:{
    type:String,
  }
})

const AdminTravelPackagesModel = mongoose.model("admintravelpackage",AdminTravelPackagesSchema);

module.exports = AdminTravelPackagesModel;