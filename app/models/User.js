import mongoose from "mongoose";
import Razorpay from "razorpay";
const { Schema, model } = mongoose;

const userschema = new Schema({
  name: { type: String},
  email: { type: String, required: true },
  username: { type: String,required:true },
  profilepic: { type: String },
  coverpic: { type: String },
  Razorpayid:{type:String},
  Razorpaysecret:{type:String},
  description:{type:String},
  created_at:{type:Number,default:Date.now()},
  updated_at:{type:Number,default:Date.now()}
});

export default mongoose.models.User || model("User", userschema);
