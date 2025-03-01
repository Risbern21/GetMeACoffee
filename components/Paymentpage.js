"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { initiate, fetchuser, fetchPayment } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

const Paymentpage = ({ username }) => {
  const router=useRouter()
  const [paymentform, setpaymentform] = useState({name:"",message:"",amount:""});
  const [currentUser, setcurrentuser] = useState({});
  const [payments, setpayments] = useState([]);
  const searchparams = useSearchParams();

  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    if (searchparams.get("paymentdone") == "true") {
      toast("thanks for your donation", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    router.push(`/${username}`)
  }, []);

  const getdata = async () => {
    let u = await fetchuser(username);
    setcurrentuser(u);
    let dbpayments = await fetchPayment(username);
    setpayments(dbpayments)
  };

  const pay = async (amount) => {

    let a = await initiate(amount, username, paymentform);
    let orderID = a.id;
    let options = {
      key: `${currentUser.Razorpayid}`, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Coffee!", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderID, //This is a sample Order ID. Pass the id obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp = new Razorpay(options);
    rzp.open();
  };
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      {/* <div class="absolute top-0 z-[-2] "></div> */}
        <div className="h-30 w-full bg-cover">
          <img
            className="object-cover w-full h-[300]"
            src={currentUser.coverpic?`${currentUser.coverpic}`:"null"}
            alt=" "
          />
          <div className="w-32 h-32 mx-auto relative bottom-16 ">
            <img
              className="object-cover w-full h-full rounded-xl border"
              src={currentUser.profilepic?`${currentUser.profilepic}`:"data:image/jpeg;base64,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"}
              alt="profilepic"
            />
          </div>
          <div className="flex justify-center items-center flex-col w-full gap-1 -mt-14">
            <div className="font-bold text-3xl">{username}</div>
            <div className="text-sm w-1/2 text-center">{currentUser.description}</div>
            <div className="text-sm text-[#797777]">
              {payments.length} members • 95 posts • ₹{(payments.reduce((a,b)=>a+b.amount,0)/100)}
            </div>
            <button
              type="button"
              className="text-[#2d2c2c] bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
            >
              Join for free
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-3 p-3 sm:px-24">
          <div className="supporters bg-[#656772] rounded-2xl p-4 w-full sm:w-1/2 overflow-y-auto h-56">
            <h1 className="font-bold text-xl text-center my-4">Top 10 Supporters</h1>
            <ul className="flex flex-col gap-3">
              {payments.length == 0 && (
                <div className="text-center">No payments yet</div>
              )}
              {payments.slice(0,10).map((k, i) => {
                return (
                  <li
                    key={i}
                    className="text-xs sm:text-[17px] w-[100%] flex gap-2 items-center"
                  >
                    <img src="/profile.svg" alt="" />
                    <span>
                      {k.name} donated{" "}
                      <span className="font-extrabold">₹{k.amount / 100}</span>{" "}
                      with a message "{k.message}"
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="payment bg-[#656772] p-2.5 rounded-2xl w-full sm:w-1/2">
            <h1 className="font-bold text-xl text-center my-5">
              Make a Payment
            </h1>
            <div className="flex gap-2 justify-center">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-[85%] rounded border bg-slate-700 p-2"
                    onChange={(e) => handlechange(e)}
                    value={paymentform.name}
                    name="name"
                  />
                  <input
                    type="text"
                    placeholder="Enter Message"
                    className="w-[85%] rounded border bg-slate-700 p-2"
                    onChange={(e) => handlechange(e)}
                    value={paymentform.message}
                    name="message"
                  />
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className="w-[85%] rounded border bg-slate-700 p-2"
                    onChange={(e) => {
                      handlechange(e);
                    }}
                    value={paymentform.amount}
                    name="amount"
                  />
                  <button
                    className="paykor border p-2 rounded-xl bg-slate-700 hover:bg-slate-500 disabled:bg-slate-600"
                    onClick={() => pay(Number.parseInt(paymentform.amount)*100)}
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 4
                      || paymentform.amount.length<1
                    }
                  >
                    Pay
                  </button>
                </div>
                <div className="flex gap-2">
                  <span
                    className="border p-2 rounded bg-slate-700 hover:bg-slate-500 "
                    onClick={() => {
                      pay(1000);
                    }}
                  >
                    Pay ₹10
                  </span>
                  <span
                    className="border p-2 rounded bg-slate-700 hover:bg-slate-500 "
                    onClick={() => {
                      pay(2000);
                    }}
                  >
                    Pay ₹20
                  </span>
                  <span
                    className="border p-2 rounded bg-slate-700 hover:bg-slate-500 "
                    onClick={(e) => {
                      pay(3000);
                    }}
                  >
                    Pay ₹30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentpage;
