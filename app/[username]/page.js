import React from "react";
import "./page.css";
import Paymentpage from "@/components/Paymentpage";
import { notFound } from "next/navigation";
import connectDB from "../db/connectdb";
import User from "../models/User";

const Username = async ({ params }) => {
  await connectDB();
  let user=await User.findOne({username:params.username})
  if(!user){
    return notFound()
  }
  return (
    <Paymentpage username={params.username}/>
  );
};

export default Username;
export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username}`,
    description: `Support ${params.username} by buying them a coffee!`,
  }
}