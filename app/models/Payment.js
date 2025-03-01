import mongoose, { Mongoose } from "mongoose";
const {Schema,model}=mongoose;

const Paymentschema=new Schema({
    name:{type:String},
    to_username:{type:String,required:true},
    oid:{type:String,required:true},
    message:{type:String},
    amount:{type:Number,required:true},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
    done:{type:Boolean,default:false}
});

export default mongoose.models.payment || model("payment",Paymentschema);