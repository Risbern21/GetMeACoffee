import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer className="bg-[#1D1E23] px-4 w-full py-4 xl:py-4 flex items-center flex-col gap-1">
      <div className="flex justify-between w-full mt-2">
        <div className="w-1/2 sm:w-1/4">
          <ul className="flex items-start flex-wrap gap-x-4 gap-y-2 text-xs sm:text-[13px] text-[#9fa0a2]">
            <li className="text-white p-0.5 rounded hover:underline cursor-pointer bg-indigo-500 shadow-lg shadow-indigo-500/50">
            <Link href={"https://youtu.be/dQw4w9WgXcQ?si=3OzyVChvvdkmea2z"}>Gift for you</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              Do not contact us
            </li>
            <li className="hover:underline cursor-pointer">Lorem ipsum kys</li>
            <li className="hover:underline cursor-pointer">Not about us</li>
            <li className="hover:underline cursor-pointer">Creator:risbern</li>
            <li className="hover:underline cursor-pointer">developer:risbern</li>
          </ul>
        </div>
        <div className="w-fit">
          <ul className="flex flex-row">
            <li>
              <Link href={"https://github.com/Risbern21"}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group border-2 border-[white] hover:bg-[gray]">
                  <span className="relative px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#ffffff"
                      fill="none"
                    >
                      <path
                        d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/risbernn/"}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-[#ff43cd] to-[#d86908] group-hover:from-cyan-500 group-hover:to-[#ae583b] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-3 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#ffffff"
                      fill="none"
                    >
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M17.5078 6.5L17.4988 6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-5 sm:my-2 sm:font-semibold flex items-end gap-x-1.5"><div>Copyright &copy; {currentyear} •</div><div className="logo font-semibold text-xl">
        GetMeA<span className="text-[#e29e4a]">Coffee!</span>
      </div></div>
    </footer>
  );
};

export default Footer;
