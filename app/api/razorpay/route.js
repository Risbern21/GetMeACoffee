import { NextResponse } from "next/server";
import Payment from "@/app/models/Payment";
import connectDB from "@/app/db/connectdb";
import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { fetchuser } from "@/actions/useractions";

export const POST = async (req) => {
  await connectDB();
  let body = await req.formData();
  body = Object.fromEntries(body);
  let p = await Payment.findOne({ oid: body.razorpay_order_id });
  if (!p) {
    return NextResponse.json({ success: false, message: "order ID not found" });
  }

  let user = await fetchuser(p.to_username);
  const secret = user.Razorpaysecret;

  let x = validatePaymentVerification(
    { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id },
    body.razorpay_signature,
    secret
  );

  if (x) {
    const updatedPayment = await Payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { done: true }
    );
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_username}?paymentdone=true`
    );
  } else {
    return NextResponse.json({
      success: false,
      message: "payment verification failed",
    });
  }
};
