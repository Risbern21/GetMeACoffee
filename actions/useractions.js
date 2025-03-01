"use server";
import Payment from "@/app/models/Payment";
import connectDB from "@/app/db/connectdb";
import Razorpay from "razorpay";
import User from "@/app/models/User";

export const initiate = async (amount, username, paymentform) => {
  await connectDB();
  let user = await fetchuser(username);
  const secret = user.Razorpaysecret;

  var instance = new Razorpay({
    key_id: user.Razorpayid,
    key_secret: secret,
  });

  instance.orders.create({
    amount: 5000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value1",
      key2: "value2",
    },
  });
  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let x = await instance.orders.create(options);
  await Payment.create({
    oid: x.id,
    amount: amount,
    to_username: username,
    name: paymentform.name,
    message: paymentform.message,
  });
  return x;
};

export const fetchuser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username });
  let user = {
    email: u.email,
    username: u.username,
    name: u.name,
    Razorpaysecret: u.Razorpaysecret,
    Razorpayid: u.Razorpayid,
    profilepic: u.profilepic,
    coverpic: u.coverpic,
    description: u.description,
  };
  return user;
};

export const fetchPayment = async (username) => {
  await connectDB();
  let payment = await Payment.find({ to_username: username, done: true })
    .sort({ amount: -1 })
    .lean();
  let p = payment.map((x) => {
    return {
      name: x.name,
      to_username: x.to_username,
      oid: x.oid,
      amount: x.amount,
      message: x.message,
    };
  });
  return p;
};

export const updateProfile = async (data, oldusername) => {
  await connectDB();
  let newdata = Object.fromEntries(data);
  if (oldusername !== newdata.username) {
    let ou = await User.findOne({ username: newdata.username });
    if (!ou) {
      return { error: "Username already exists" };
    }
    let y = await User.updateOne({ email: newdata.email }, newdata);
    await Payment.updateMany(
      { to_username: oldusername },
      { to_username: newdata.username }
    );
  } else {
    await User.updateOne({ email: newdata.email }, newdata);
  }
};
