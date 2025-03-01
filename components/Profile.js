"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setform] = useState({});

  const getdata = async () => {
    let u = await fetchuser(session.user.email.split("@")[0]);
    setform(u);
  };

  useEffect(() => {
    getdata();
    if (!session) {
      router.push("/login");
    }
  }, [router, session]);

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (data) => {
    await updateProfile(data, session.user.email.split("@")[0]);
    toast("Updated your profile", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="p-3">
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
      <h1 className="text-2xl font-bold">Profile</h1>
      <form action={(e) => handlesubmit(e)} className="flex flex-col gap-5">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name ? form.name : ""}
            className="p-2 rounded-xl border w-[100%] bg-slate-700"
            placeholder="Enter your name"
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username ? form.username : ""}
            className="p-2 rounded-xl border w-[100%] bg-slate-700"
            placeholder="Enter your Username"
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email ? form.email : ""}
            className="p-2 rounded-xl border w-[100%] bg-slate-700"
            placeholder="Enter your Username"
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div className="flex gap-2">
          <div>
            <label htmlFor="email">Razorpay ID</label>
            <input
              type="password"
              id="Razorpayid"
              name="Razorpayid"
              value={form.Razorpayid ? form.Razorpayid : ""}
              className="p-2 rounded-xl border w-[100%] bg-slate-700"
              placeholder="Enter your Razorpay ID"
              onChange={(e) => handlechange(e)}
            />
          </div>
          <div>
            <label htmlFor="Razorpaysecret">Razorpay Secret</label>
            <input
              type="password"
              id="Razorpaysecret"
              name="Razorpaysecret"
              value={form.Razorpaysecret ? form.Razorpaysecret : ""}
              className="p-2 rounded-xl border w-[100%] bg-slate-700"
              placeholder="Enter your Razorpay Secret"
              onChange={(e) => handlechange(e)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="profilepic">Profile Picture:</label>
          <input
            type="text"
            id="profilepic"
            name="profilepic"
            value={form.profilepic ? form.profilepic : ""}
            className="p-2 rounded-xl border w-[100%] bg-slate-700"
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div>
          <label htmlFor="coverpic">Cover Picture:</label>
          <input
            type="text"
            id="coverpic"
            name="coverpic"
            value={form.coverpic ? form.coverpic : ""}
            className="p-2 rounded-xl border w-[100%] bg-slate-700"
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.description ? form.description : ""}
            className="p-2 w-[100%] rounded-xl bg-slate-700 border"
            placeholder="Enter your bio"
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div className="mx-auto w-fit">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
