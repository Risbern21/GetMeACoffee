import React from "react";

const about = () => {
  return (
    <>
      <div className="w-full mx-auto py-3 px-7">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-4 text-lg">
          Welcome to Get Me A Coffee! We are dedicated to bringing you the best
          coffee experience.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          About This Crowdfunding Platform
        </h2>
        <p className="mt-4 text-lg">
          Get Me A Coffee is a crowdfunding platform that allows creators to
          receive support from their fans and followers. By using this platform,
          creators can fund their projects, share exclusive content, and build a
          community around their work.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Benefits for Get Me A Coffee Users
        </h2>
        <ul className="mt-4 list-disc list-inside text-lg">
          <li>Support your favorite creators directly.</li>
          <li>Access exclusive content and rewards.</li>
          <li>Engage with a community of like-minded individuals.</li>
          <li>Receive updates and insights from creators.</li>
          <li>Help creators achieve their goals and projects.</li>
        </ul>
      </div>
    </>
  );
};

export default about;
export const metadata = {
  title: "Get Me A Coffee - About",
  description: "Learn more about Get Me A Coffee and how it works.",
};
