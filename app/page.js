import Image from "next/image";
import Link from "next/link";
import "./globals.css"

export default function Home() {
  return (
    <>
      <div className="h-[44vh] flex flex-col items-center justify-center px-3 bg-[#656772] my-2 mx-2 rounded-2xl gap-2">
        <div className="logo flex items-end text-3xl font-extrabold">
          GetMeA<span className="text-[#e29e4a]">Coffee!</span>
          <span>
            <img src="/coffee.gif" alt="coffee" className="w-12" />
          </span>
        </div>
        <p>
          A Crowd Funding Platform where Your fans and supporters can fund you
        </p>
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center me-2 mb-2"
            >
              Start Here
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="px-3 bg-[#656772] rounded-2xl mx-2 my-2 py-8">
        <div className="text-center font-bold mb-10">
          Your Fans Can Buy You A Coffee
        </div>
        <div className="flex flex-wrap gap-3 justify-around items-center">
          <div className="item flex flex-col justify-center items-center text-xs sm:text-lg text-center">
            <img
              src="/man.gif"
              alt="man"
              width={88}
              className="rounded-2xl bg-[#1D1E23] rounded-2xl p-1"
            />
            <p className="font-bold w-1/2 sm:w-fit">
              Your Fans Want To Fund You
            </p>
            <p className="w-1/2 sm:w-fit text-[14px]">
              Your fans are here to help you
            </p>
          </div>
          <div className="item flex flex-col justify-center items-center text-xs sm:text-lg text-center">
            <img
              src="/coin.gif"
              alt="man"
              width={68}
              className="rounded-2xl bg-[#1D1E23] rounded-2xl p-1"
            />
            <p className="font-bold w-1/2 sm:w-fit">
              Your Fans Want To Fund You
            </p>
            <p className="w-1/2 sm:w-fit text-[14px]">
              Your fans are here to help you
            </p>
          </div>
          <div className="item flex flex-col justify-center items-center text-xs sm:text-lg text-center">
            <img
              src="/money.gif"
              alt="man"
              width={68}
              className="rounded-2xl rounded-2xl border-2 border-black"
            />
            <p className="font-bold w-3/2 sm:w-fit">
              Your Fans Want To Fund You
            </p>
            <p className="w-3/2 sm:w-fit text-[14px]">
              Your fans are here to help you
            </p>
          </div>
        </div>
      </div>
      <div className="px-3 bg-[#656772] rounded-2xl flex flex-col items-center justify-center mx-2 my-2 py-8">
        <div className="text-center font-bold mb-10">
          Your Fans Can Buy You A Coffee
        </div>
        <iframe
          className="w-full sm:w-3/5 rounded-2xl"
          height="315"
          src="https://www.youtube.com/embed/9YSDDjVzK8A?si=u_wp7hnPXkPFG41c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
